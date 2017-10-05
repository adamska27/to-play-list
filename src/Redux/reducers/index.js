import { combineReducers } from 'redux'
import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILED, ADD_GAME_TO_MYGAMES, CHECK_GAME } from '../actions'

const initialState = {
  games: [],
  fetching: false,
  fetched: false,
  error: false,
}

function gamesList(state = initialState, action) {
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

const rootReducer = combineReducers({ gamesList,  myGames })

export default rootReducer