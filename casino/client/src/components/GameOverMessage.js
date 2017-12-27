import React from 'react';

const GameOverMessage = (props) => { //end game message container

  return (
    <div>
      <h2>{props.message}</h2> //message passed in from blackjack props.gameMessage
    </div>
  );
};

export default GameOverMessage;
