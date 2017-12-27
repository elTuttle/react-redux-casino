import React from 'react';

const GameOverMessage = (props) => { //end game message container

  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
};

export default GameOverMessage;
