import React from 'react';
import ImageDiv from './ImageDiv';

class Blackjack extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonText: 'Play',
      playerImageDivArray: ["red_back","red_back"],
      dealerImageDivArray: ["red_back","red_back"],
      player: {
        cards: []
      },
      dealer: {
        cards: []
      }
    }

  }

  handleClick = () => {
    fetch('/games/new')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        buttonText: 'New Game',
        player: {
          cards: [data.player_hand_one, data.player_hand_two]
        },
        dealer: {
          cards: [data.dealer_hand_one, data.dealer_hand_two]
        }
      })
      this.translateIntToCardsInitial();
    })
  }

  translateIntToCardsInitial = () => {

  }

  render() {

    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleClick} width="50" height="50">{this.state.buttonText}</button><br /><br />
        <ImageDiv imagesArray={this.state.playerImageDivArray}/>
        <ImageDiv imagesArray={this.state.dealerImageDivArray}/>
      </div>
    );
  }
};

export default Blackjack;
