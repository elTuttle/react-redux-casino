import React from 'react';
import { connect } from 'react-redux';
import { playerHit, stay, dealerHit } from '../actions/BlackJackActions'
import { bindActionCreators } from 'redux';

class HitAndStayButtons extends React.Component{

  handleHit = () => {
    fetch('/games/' + this.props.gameId + '/hit')
    .then(results => {
      return results.json();
    }).then(data => {
      this.props.playerHit(data);
    })
  }

  handleStay = () => {
    this.props.stay();
    if (this.props.dealerScore < 17 && this.props.dealerScore < this.props.playerScore) {
      fetch('/games/' + this.props.gameId + '/hit')
      .then(results => {
        return results.json();
      }).then(data => {
        this.props.dealerHit(data);
      })
    }
  }

  render() {

    if(this.props.gameStart === true && this.props.gameWon === false) {
      return (
        <div>
          <button onClick={this.handleHit} width="50" height="50">Hit</button>
          <button onClick={this.handleStay} width="50" height="50">Stay</button>
        </div>
      )
    } else {
      return null
    }
  }
};

const mapStateToProps = (state) => {
  return {
    gameWon: state.gameWon,
    gameStart: state.gameStart,
    player: state.player,
    playerScore: state.player.score,
    dealer: state.dealer,
    dealerScore: state.dealer.score
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    playerHit: playerHit,
    stay: stay,
    dealerHit: dealerHit
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HitAndStayButtons);
