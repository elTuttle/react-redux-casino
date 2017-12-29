import React from 'react';
import ImageDiv from './ImageDiv';
import HitAndStayButtons from './HitAndStayButtons'
import GameOverMessage from './GameOverMessage'
import Center from 'react-center'
import { connect } from 'react-redux';
import { newGame, setToDefault } from '../actions/BlackJackActions'
import { bindActionCreators } from 'redux';

class Blackjack extends React.Component {

  constructor() {
    super();

    this.state = {
      buttonText: 'Play',
      gameId: null,
      bank: 0,
      bankColor: 'green'
    }

  }

  componentWillMount() {//when the component is created, send get request for bank
    fetch('/banks/1')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        bank: data.value
      })
    })
  }

  componentWillUnmount() {
    this.props.setToDefault();
  }

  componentDidUpdate(prevProps, prevState) {//if wins and losses changes, update bank and post to database
    if (this.props.totalWins > prevProps.totalWins) {
      this.setState({
        bank: this.state.bank + 100,
        bankColor: 'green'
      })
    }
    if (this.props.totalLosses > prevProps.totalLosses) {
      if (this.state.bank !== 0) {
        this.setState({
          bank: this.state.bank - 100,
        })
      } else {
        this.setState({
          bankColor: 'red'
        })
      }
    }
    fetch(`/banks/1/${this.state.bank}`, {
      method: 'put'
    })
  }

  handleClick = () => {
    fetch('/games/new') //fetch the json of a new game from api
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        buttonText: "New Game",
        gameId: data.id
      })
      const game = {
        player: {
          cards: [data.player_hand_one, data.player_hand_two]
        },
        dealer: {
          cards: [data.dealer_hand_one, data.dealer_hand_two]
        }
      }
      this.props.newGame(game) //send new game action with the data values from json
    })

    }

  /*  callApi = () => {
      console.log('a')
      fetch('/games') //fetch the json of a new game from api
      .then(results => {
        console.log('b')
        return results.json();
      }).then(data => {
        console.log('c', data)
      })
      .catch(err => console.log('d'))
      console.log('e')
    } */

  render() {

    if (true) {

    }

    return (
      <div>
        <Center>
          <img src={require(`../cards/blackjacklogo.png`)} alt="blackjackTitle"/>
        </Center>

        <Center>
          <h3>Wins: {this.props.totalWins}  Losses: {this.props.totalLosses}</h3>
        </Center>
        <Center>
          <p>Bank: <strong style={{color: this.state.bankColor}}>${this.state.bank}</strong></p>
        </Center>
        <Center>
          <button onClick={this.handleClick} width="50" height="50">{this.state.buttonText}</button><br /><br />
        </Center>
        <Center>
          <ImageDiv imagesArray={this.props.dealer.pngs}/>
        </Center>
        <Center>
          <ImageDiv imagesArray={this.props.player.pngs}/>
        </Center>
        <Center>
          <GameOverMessage message={this.props.message} />
        </Center>
        <Center>
          <h1>Score: {this.props.player.score}</h1>
        </Center>
        <Center>
          <HitAndStayButtons gameId={this.state.gameId}/>
        </Center>
      </div>
    );
  }
};

const mapStateToProps = (state) => { //getting props from state necessary for Blackjack Component
  //some of these props aren't used but rather exist to help tell the component that the state has changed and needs to re-render
  return {
    player: state.player,
    player_pngs: state.player.pngs,
    player_score: state.player.score,
    dealer: state.dealer,
    dealer_pngs: state.dealer.pngs,
    dealer_png_one: state.dealer.pngs[1],
    dealer_score: state.dealer.score,
    message: state.gameMessage,
    totalWins: state.totalWins,
    totalLosses: state.totalLosses
  }
};

const mapDispatchToProps = (dispatch) => { //getting dispatch actions necessary for Blackjack Component
  return bindActionCreators({
    newGame: newGame,
    setToDefault: setToDefault
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blackjack);
