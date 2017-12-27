export const newGame = (game) => {
  return {
    type: 'NEW_GAME',
    game
  }
}

export const getScore = () => {
  return {
    type: 'GET_SCORE'
  }
}
