import React from 'react';

class Blackjack extends React.Component {

  handleClick = () => {

  }

  render() {
    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleClick} width="50" height="50">Play</button><br /><br />
        <img src={require('../cards/red_back.png')} width="130" height="200"/>
        <img src={require('../cards/red_back.png')} width="130" height="200"/><br /><br />
        <img src={require('../cards/red_back.png')} width="130" height="200"/>
        <img src={require('../cards/red_back.png')} width="130" height="200"/>
      </div>
    );
  }
};

export default Blackjack;
