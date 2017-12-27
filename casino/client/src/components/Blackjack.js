import React from 'react';
import ImageDiv from './ImageDiv';
import { connect } from 'react-redux';

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
        playerImageDivArray: [this.translateIntToCards(data.player_hand_one),this.translateIntToCards(data.player_hand_two)],
        dealerImageDivArray: [this.translateIntToCards(data.dealer_hand_one),"red_back"],
        player: {
          cards: [data.player_hand_one, data.player_hand_two]
        },
        dealer: {
          cards: [data.dealer_hand_one, data.dealer_hand_two]
        }
      })
    })
  }

  translateIntToCards = (cardInt) => {
    if (cardInt < 13) {
      switch (cardInt) {
        case 0:
          return "AS"
        case 1:
          return "2S"
        case 2:
          return "3S"
        case 3:
          return "4S"
        case 4:
          return "5S"
        case 5:
          return "6S"
        case 6:
          return "7S"
        case 7:
          return "8S"
        case 8:
          return "9S"
        case 9:
          return "10S"
        case 10:
          return "JS"
        case 11:
          return "QS"
        case 12:
          return "KS"
        default:
          "red_back"
      }
    }else if (cardInt >= 13 && cardInt < 26) {
      switch (cardInt) {
        case 13:
          return "AH"
        case 14:
          return "2H"
        case 15:
          return "3H"
        case 16:
          return "4H"
        case 17:
          return "5H"
        case 18:
          return "6H"
        case 19:
          return "7H"
        case 20:
          return "8H"
        case 21:
          return "9H"
        case 22:
          return "10H"
        case 23:
          return "JH"
        case 24:
          return "QH"
        case 25:
          return "KH"
        default:
          "red_back"
      }
    }else if (cardInt >= 26 && cardInt < 39) {
      switch (cardInt) {
        case 26:
          return "AC"
        case 27:
          return "2C"
        case 28:
          return "3C"
        case 29:
          return "4C"
        case 30:
          return "5C"
        case 31:
          return "6C"
        case 32:
          return "7C"
        case 33:
          return "8C"
        case 34:
          return "9C"
        case 35:
          return "10C"
        case 36:
          return "JC"
        case 37:
          return "QC"
        case 38:
          return "KC"
        default:
          "red_back"
      }
    }else if (cardInt >= 39 && cardInt <= 51) {
      switch (cardInt) {
        case 39:
          return "AD"
        case 40:
          return "2D"
        case 41:
          return "3D"
        case 42:
          return "4D"
        case 43:
          return "5D"
        case 44:
          return "6D"
        case 45:
          return "7D"
        case 46:
          return "8D"
        case 47:
          return "9D"
        case 48:
          return "10D"
        case 49:
          return "JD"
        case 50:
          return "QD"
        case 51:
          return "KD"
        default:
          "red_back"
      }
    }
  }

  render() {

    //console.log(this.props)

    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleClick} width="50" height="50">{this.state.buttonText}</button><br /><br />
        <ImageDiv imagesArray={this.state.dealerImageDivArray}/>
        <ImageDiv imagesArray={this.state.playerImageDivArray}/>

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    dealer: state.dealer
  }
};

export default connect(mapStateToProps)(Blackjack);
