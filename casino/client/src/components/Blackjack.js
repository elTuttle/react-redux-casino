import React from 'react';
import ImageDiv from './ImageDiv';
import HitAndStayButtons from './HitAndStayButtons'
import GameOverMessage from './GameOverMessage'
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

    console.log(this.props.dealer)

    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleClick} width="50" height="50">{this.state.buttonText}</button><br /><br />
        <ImageDiv imagesArray={this.props.dealer.pngs}/>
        <ImageDiv imagesArray={this.props.player.pngs}/>
        <h1><GameOverMessage message={this.props.message} /></h1>
        <h1>Score: {this.props.player.score}</h1>
        <HitAndStayButtons gameId={this.state.gameId}/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state.dealer)
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    newGame: newGame

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackjack);
