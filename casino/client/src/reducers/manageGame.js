export default function manageGame(state={
  player: {
    hand: [],
    pngs: [],
    score: 0
  },
  dealer: {
    hand: [],
    pngs: [],
    score: 0
  }
},action){
  switch (action.type) {
    case 'GET_SCORE':
      debugger;
      return state
    default:
      return state
  }
}
