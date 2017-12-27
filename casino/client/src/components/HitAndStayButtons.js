import React from 'react';
import { connect } from 'react-redux';
import { playerHit, stay, dealerHit, checkForWin } from '../actions/BlackJackActions'
import { bindActionCreators } from 'redux';

class HitAndStayButtons extends React.Component{

  handleHit = () => { //when the player hits, fetch a new card from api
    fetch('/games/' + this.props.gameId + '/hit')
    .then(results => {
      return results.json();
    }).then(data => {
      this.props.playerHit(data);//run player hit action with new card value
    })
  }

  handleStay = () => { //when player presses stay, run stay action
    this.props.stay();
  }

  handleDealerHit = () => { //while dealers score is still under 17, fetch a new card from api
    if (this.props.dealerScore < 17 && this.props.dealerScore <= this.props.playerScore) {
      fetch('/games/' + this.props.gameId + '/hit')
      .then(results => {
        return results.json();
      }).then(data => {
        this.props.dealerHit(data);//run dealer hit action with new card value
      })
    }
    this.props.checkForWin();//check if dealer or player has won
  }

  render() {

    if (this.props.gameWon == true && this.props.playerScore < 21) {//if dealer or player has not one yet, hit dealer and check for win
      this.handleDealerHit();
      this.props.checkForWin();
    }

    if(this.props.gameStart === true && this.props.gameWon === false) { //if the game has started but is not over, display buttons
      return (
        <div>
          <button onClick={this.handleHit} width="50" height="50">Hit</button> //hit button
          <button onClick={this.handleStay} width="50" height="50">Stay</button> //stay button
        </div>
      )
    } else { //display nothing if game hasn't started or is already won
      return null
    }
  }
};

const mapStateToProps = (state) => {//getting props from state necessary for HitAndStayButtons Component
  //some of these props aren't used but rather exist to help tell the component that the state has changed and needs to re-render
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
    dealerHit: dealerHit,
    checkForWin: checkForWin
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HitAndStayButtons);
