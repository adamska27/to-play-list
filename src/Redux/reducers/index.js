import { combineReducers } from 'redux'
import { FETCH_GAMES, FETCH_GAMES_START, FETCH_GAMES_FAILED, ADD_GAME_TO_MYGAMES } from '../actions'
import swal from 'sweetalert'

const initialState = {
  games: [],
  loader: false,
  fetching: false,
  fetched: false
}

function gamesList(state = initialState, action) {
  switch(action.type) {
    case FETCH_GAMES_START:
      return {...state, fetching: true, loader: true}
    case FETCH_GAMES:
      return {...state, games: action.games, fetched: true, loader: false}
    case FETCH_GAMES_FAILED:
      return swal('oups', `${action.err}`, 'error')
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