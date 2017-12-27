import React from 'react';
import { connect } from 'react-redux';

class HitAndStayButtons extends React.Component{

  handleHit = () => {
    console.log("hit")
  }

  handleStay = () => {
    console.log("stay")
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
    dealer: state.dealer
  }
};

export default connect(mapStateToProps)(HitAndStayButtons);
