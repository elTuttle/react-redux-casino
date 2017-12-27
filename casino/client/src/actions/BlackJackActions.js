export const newGame = (game) => {
  return {
    type: 'NEW_GAME',
    game
  }
}

export const hit = () => {
  return{
    type: 'HIT'
  }
}

export const stay = () => {
  return{
    type: 'STAY'
  }
}
