import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILED } from '../actions'

const initialState = {
    games: [],
    fetching: false,
    fetched: false,
    error: false,
}
  
const gamesList = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_GAMES_REQUEST:
        return {...state, fetching: true}
      case FETCH_GAMES_SUCCESS:
        return {...state, games: action.games, fetching: false, fetched: true}
      case FETCH_GAMES_FAILED:
        return {...state, fetching: false, error: true}
      default:
        return state
    }
}

export default gamesList