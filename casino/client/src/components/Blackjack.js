import React from 'react';
import ImageDiv from './ImageDiv';
import HitAndStayButtons from './HitAndStayButtons'
import GameOverMessage from './GameOverMessage'
import Center from 'react-center'
import { connect } from 'react-redux';
import { newGame } from '../actions/BlackJackActions'
import { bindActionCreators } from 'redux';

class Blackjack extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonText: 'Play',
      gameId: null
    }

  }

  handleClick = () => {
    fetch('/games/new') //fetch the json of a new game from api
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        buttonText: "New Game",
        gameId: data.id
      })
      const game = {
        player: {
          cards: [data.player_hand_one, data.player_hand_two]
        },
        dealer: {
          cards: [data.dealer_hand_one, data.dealer_hand_two]
        }
      }
      this.props.newGame(game) //send new game action with the data values from json
    })

    }

  render() {

    return (
      <div>
        <Center>
          <h1>Blackjack</h1> //Title
        </Center>
        <Center>
          <button onClick={this.handleClick} width="50" height="50">{this.state.buttonText}</button><br /><br /> //play button
        </Center>
        <Center>
          <ImageDiv imagesArray={this.props.dealer.pngs}/>//dealers pngs
        </Center>
        <Center>
          <ImageDiv imagesArray={this.props.player.pngs}/>//players pngs
        </Center>
        <Center>
          <GameOverMessage message={this.props.message} />//message container
        </Center>
        <Center>
          <h1>Score: {this.props.player.score}</h1>//score div
        </Center>
        <Center>
          <HitAndStayButtons gameId={this.state.gameId}/>//Hit and Stay Component
        </Center>
      </div>
    );
  }
};

const mapStateToProps = (state) => { //getting props from state necessary for Blackjack Component
  //some of these props aren't used but rather exist to help tell the component that the state has changed and needs to re-render
  return {
    player: state.player,
    player_pngs: state.player.pngs,
    player_score: state.player.score,
    dealer: state.dealer,
    dealer_pngs: state.dealer.pngs,
    dealer_png_one: state.dealer.pngs[1],
    dealer_score: state.dealer.score,
    message: state.gameMessage
  }
};

const mapDispatchToProps = (dispatch) => { //getting dispatch actions necessary for Blackjack Component
  return bindActionCreators({
    newGame: newGame
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackjack);
