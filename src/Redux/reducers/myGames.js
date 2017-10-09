import { ADD_GAME_TO_MYGAMES, CHECK_GAME } from '../actions'

function myGame(state = {}, action) {
    switch(action.type) {
      case CHECK_GAME:
        if (state.id === action.game.id) {
          return {...state, played: !state.played}
        }
        return state
      default:
        return state
    }
}
  

function myGames(state = [], action) {
    switch(action.type) {
      case ADD_GAME_TO_MYGAMES:
        action.game.played = false
        return [...state, action.game]
      case CHECK_GAME:
        return state.map( game => {
          return myGame(game, action)
        })
      default:
        return state
    }
}
  
export default myGames