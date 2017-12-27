import React from 'react';
import ImageDiv from './ImageDiv';
import HitAndStayButtons from './HitAndStayButtons'
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
    fetch('/games/new')
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
      this.props.newGame(game)
    })

    }
    
  render() {

    console.log(this.state)
    //debugger;

    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleClick} width="50" height="50">{this.state.buttonText}</button><br /><br />
        <ImageDiv imagesArray={this.props.dealer.pngs}/>
        <ImageDiv imagesArray={this.props.player.pngs}/>
        <h1>Score: {this.props.player.score}</h1>
        <HitAndStayButtons gameId={this.state.gameId}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    dealer: state.dealer
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newGame: newGame

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackjack);
