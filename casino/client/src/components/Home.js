import React from 'react';
import Center from 'react-center';

const Home = () => { //Home page
  return (
    <div>
      <Center>
        <img src={require(`../cards/casinologo.png`)}/>
      </Center>
      <Center>
        <p>Welcome to John Tuttle's React Redux Casino, currently we only have blackjack but more games are on the way!</p>
      </Center>
    </div>
  );
};

export default Home;
