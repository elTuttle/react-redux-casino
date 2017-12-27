export default function manageGame(state={
  gameWon: false,
  gameStart: false,
  gameMessage: "",
  player: {
    hand: [],
    pngs: ['red_back','red_back'],
    score: 0
  },
  dealer: {
    hand: [],
    pngs: ['red_back','red_back'],
    score: 0
  }
},action){
  switch (action.type) {
    case 'NEW_GAME':
      //debugger;

      var playerScore = 0
      var dealerScore = 0

      const playerCardOne = action.game.player.cards[0];
      const playerCardTwo = action.game.player.cards[1];

      const dealerCardOne = action.game.dealer.cards[0];
      const dealerCardTwo = action.game.dealer.cards[1];

      playerScore += getScoreValue(playerCardOne)
      playerScore += getScoreValue(playerCardTwo)

      dealerScore += getScoreValue(dealerCardOne)
      dealerScore += getScoreValue(dealerCardTwo)

      const newState = {
        gameWon: false,
        gameStart: true,
        player: {
          hand: [action.game.player.cards[0], action.game.player.cards[1]],
          pngs: [getPngName(playerCardOne), getPngName(playerCardTwo)],
          score: playerScore
        },
        dealer: {
          hand: [action.game.dealer.cards[0], action.game.dealer.cards[1]],
          pngs: [getPngName(dealerCardOne), 'red_back'],
          score: dealerScore
        }
      }
      if (newState.player.score == 21) {
        newState.gameMessage = "21!"
        newState.gameWon = true
      }
      return newState

    case 'PLAYER_HIT':
      const updatedPlayer = state.player
      updatedPlayer.hand.push(action.cardValue)
      updatedPlayer.pngs.push(getPngName(action.cardValue))
      updatedPlayer.score += getScoreValue(action.cardValue)

      if (updatedPlayer.score > 21) {
        if (updatedPlayer.hand.includes(0) || updatedPlayer.hand.includes(13) || updatedPlayer.hand.includes(26) || updatedPlayer.hand.includes(39)) {
          const hand = []
          updatedPlayer.hand.forEach(function(card) {
            if (card === 0 || card === 13 || card === 26 || card === 39) {
              card = 53;
              updatedPlayer.score -= 10;
            }
            hand.push(card)
          })
          updatedPlayer.hand = hand
        } else {
          state.gameMessage = "Bust!"
          state.gameWon = true
        }
      } else if (updatedPlayer.score == 21) {
        state.gameMessage = "21!"
        state.gameWon = true
      }
      return Object.assign({}, state, { player: updatedPlayer})
    case 'DEALER_HIT':
        const updatedDealer = state.dealer
        updatedDealer.hand.push(action.cardValue)
        updatedDealer.pngs.push(getPngName(action.cardValue))
        updatedDealer.score += getScoreValue(action.cardValue)

        if (updatedDealer.score > 21) {
          if (updatedDealer.hand.includes(0) || updatedDealer.hand.includes(13) || updatedDealer.hand.includes(26) || updatedDealer.hand.includes(39)) {
            const dealerHand = []
            updatedDealer.hand.forEach(function(card) {
              if (card === 0 || card === 13 || card === 26 || card === 39) {
                card = 53;
                updatedDealer.score -= 10;
              }
              dealerHand.push(card)
            })
            updatedDealer.hand = dealerHand
          } else {
            state.gameMessage = "Dealer Busts! You Win!"
          }
        } else if (updatedDealer.score == 21) {
          state.gameMessage = "Dealer Wins!"
        } else if (updatedDealer.score >= 17 && updatedDealer.score < 21 && updatedDealer.score < state.player.score) {
          state.gameMessage = "You Win!"
        }
        return Object.assign({}, state, { dealer: updatedDealer})
    case 'STAY':
      var dealerStay = state.dealer;
      dealerStay.pngs[1] = getPngName(dealerStay.hand[1]);
      state.gameWon = true;
      console.log(dealerStay)
      if (dealerStay.score > state.player.score && dealerStay.score <= 21) {
        state.gameMessage = "Dealer Wins!";
      } else if (dealerStay.score >= 17 && state.player.score >= 17 && dealerStay.score == state.player.score) {
        state.gameMessage = "Tie!"
      }else if (dealerStay.score >= 17 && dealerStay.score < state.player.score){
        state.gameMessage = "You win!"
      }
      return Object.assign({}, state, { dealer: dealerStay})
    default:
      return state
  }
}

function getScoreValue(cardNumber) {
  switch (cardNumber) {
    case 0:
    case 13:
    case 26:
    case 39:
      return 11;
    case 1:
    case 14:
    case 27:
    case 40:
      return  2;
    case 2:
    case 15:
    case 28:
    case 41:
      return  3;
    case 3:
    case 16:
    case 29:
    case 42:
      return 4;
    case 4:
    case 17:
    case 30:
    case 43:
      return 5;
    case 5:
    case 18:
    case 31:
    case 44:
      return 6;
    case 6:
    case 19:
    case 32:
    case 45:
      return  7;
    case 7:
    case 20:
    case 33:
    case 46:
      return  8;
    case 8:
    case 21:
    case 34:
    case 47:
      return 9;
    case 9:
    case 10:
    case 11:
    case 12:
    case 22:
    case 23:
    case 24:
    case 25:
    case 35:
    case 36:
    case 37:
    case 38:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
      return 10;
    case 53:
      return 1;
    }
}

function getPngName(cardInt) {
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
        return "red_back"
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
        return "red_back"
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
        return "red_back"
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
        return "red_back"
    }
  }
}
