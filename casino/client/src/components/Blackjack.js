import React from 'react';

class Blackjack extends React.Component {

  handleClick = () => {
    
  }

  render() {
    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleClick}>Deal Hand</button>
      </div>
    );
  }
};

export default Blackjack;
