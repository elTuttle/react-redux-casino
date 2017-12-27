export default function manageGame(state={
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

      switch (playerCardOne) {
        case 0:
        case 13:
        case 26:
        case 39:
          playerScore += 11;
          break;
        case 1:
        case 14:
        case 27:
        case 40:
          playerScore += 2;
          break;
        case 2:
        case 15:
        case 28:
        case 41:
          playerScore += 3;
          break;
        case 3:
        case 16:
        case 29:
        case 42:
          playerScore += 4;
          break;
        case 4:
        case 17:
        case 30:
        case 43:
          playerScore += 5;
          break;
        case 5:
        case 18:
        case 31:
        case 44:
          playerScore += 6;
          break;
        case 6:
        case 19:
        case 32:
        case 45:
          playerScore += 7;
          break;
        case 7:
        case 20:
        case 33:
        case 46:
          playerScore += 8;
          break;
        case 8:
        case 21:
        case 34:
        case 47:
          playerScore += 9;
          break;
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
          playerScore += 10;
          break;
        }

      switch (playerCardTwo) {
        case 0:
        case 13:
        case 26:
        case 39:
          playerScore += 11;
          break;
        case 1:
        case 14:
        case 27:
        case 40:
          playerScore += 2;
          break;
        case 2:
        case 15:
        case 28:
        case 41:
        playerScore += 3;
          break;
        case 3:
        case 16:
        case 29:
        case 42:
          playerScore += 4;
          break;
        case 4:
        case 17:
        case 30:
        case 43:
          playerScore += 5;
          break;
        case 5:
        case 18:
        case 31:
        case 44:
          playerScore += 6;
          break;
        case 6:
        case 19:
        case 32:
        case 45:
          playerScore += 7;
          break;
        case 7:
        case 20:
        case 33:
        case 46:
          playerScore += 8;
          break;
        case 8:
        case 21:
        case 34:
        case 47:
          playerScore += 9;
          break;
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
          playerScore += 10;
          break;
        }

      switch (dealerCardOne) {
        case 0:
        case 13:
        case 26:
        case 39:
          dealerScore += 11;
          break;
        case 1:
        case 14:
        case 27:
        case 40:
          dealerScore += 2;
          break;
        case 2:
        case 15:
        case 28:
        case 41:
          dealerScore += 3;
          break;
        case 3:
        case 16:
        case 29:
        case 42:
          dealerScore += 4;
          break;
        case 4:
        case 17:
        case 30:
        case 43:
          dealerScore += 5;
          break;
        case 5:
        case 18:
        case 31:
        case 44:
          dealerScore += 6;
          break;
        case 6:
        case 19:
        case 32:
        case 45:
          dealerScore += 7;
          break;
        case 7:
        case 20:
        case 33:
        case 46:
          dealerScore += 8;
          break;
        case 8:
        case 21:
        case 34:
        case 47:
          dealerScore += 9;
          break;
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
          dealerScore += 10;
          break;
        }

      switch (dealerCardTwo) {
        case 0:
        case 13:
        case 26:
        case 39:
          dealerScore += 11;
          break;
        case 1:
        case 14:
        case 27:
        case 40:
          dealerScore += 2;
          break;
        case 2:
        case 15:
        case 28:
        case 41:
          dealerScore += 3;
          break;
        case 3:
        case 16:
        case 29:
        case 42:
          dealerScore += 4;
          break;
        case 4:
        case 17:
        case 30:
        case 43:
          dealerScore += 5;
          break;
        case 5:
        case 18:
        case 31:
        case 44:
          dealerScore += 6;
          break;
        case 6:
        case 19:
        case 32:
        case 45:
          dealerScore += 7;
          break;
        case 7:
        case 20:
        case 33:
        case 46:
          dealerScore += 8;
          break;
        case 8:
        case 21:
        case 34:
        case 47:
          dealerScore += 9;
          break;
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
          dealerScore += 10;
          break;
        }

    //debugger;

      const newState = {
        player: {
          hand: [action.game.player.cards[0], action.game.player.cards[1]],
          pngs: [action.game.playerImage[0], action.game.playerImage[1]],
          score: playerScore
        },
        dealer: {
          hand: [action.game.dealer.cards[0], action.game.dealer.cards[1]],
          pngs: [action.game.dealerImage[0], action.game.dealerImage[1]],
          score: dealerScore
        }
      }
      return newState
    default:
      return state
  }
}
