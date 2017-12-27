export const newGame = (game) => {
  return {
    type: 'NEW_GAME',
    game
  }
}

export const playerHit = (card) => {
  return{
    type: 'PLAYER_HIT',
    cardValue: card
  }
}

export const dealerHit = (card) => {
  return{
    type: 'DEALER_HIT',
    cardValue: card
  }
}

export const stay = (idValue) => {
  return{
    type: 'STAY'
  }
}
