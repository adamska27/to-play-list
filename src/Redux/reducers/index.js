import { combineReducers } from 'redux'
import { FETCH_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILED, ADD_GAME_TO_MYGAMES } from '../actions'

const initialState = {
  games: [],
  loader: false,
  fetching: false,
  fetched: false,
  error: false,
}

function gamesList(state = initialState, action) {
  switch(action.type) {
    case FETCH_GAMES:
      return {...state, fetching: true, loader: true}
    case FETCH_GAMES_SUCCESS:
      return {...state, games: action.games, fetching: false, fetched: true, loader: false}
    case FETCH_GAMES_FAILED:
      return {...state, loader: false, fetching: false, error: true}
    default:
      return state
  }
}

function myGames(state = [], action) {
  switch(action.type) {
    case ADD_GAME_TO_MYGAMES:
      return [...state, action.game]
    default:
      return state
  }
}

const rootReducer = combineReducers({ gamesList,  myGames })

export default rootReducer