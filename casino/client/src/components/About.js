import React from 'react';
import Center from 'react-center'

const About = () => { //About page
  return (
    <div>
      <Center>
        <h1>How To Play</h1>
      </Center>

      <Center>
        <p>The cards 2 through 10 are worth their face value. Kings, queens, and jacks are each worth 10,
         and aces may be used as either 1 or 11.</p>
      </Center>
      <Center>
        <p>The object for the player is to draw cards totaling closer to 21,
        without going over, than the dealer's cards.</p>
      </Center>
      <Center>
        <p>The best total of all is a two-card 21, or a blackjack.</p>
      </Center>
    </div>
  );
};

export default About;
