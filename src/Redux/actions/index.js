import { alertAddGame } from '../helpers'

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST'
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS'
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED'
export const ADD_GAME_TO_MYGAMES = 'ADD_GAME_TO_MYGAMES'
export const CHECK_GAME = 'CHECK_GAME'


export function fetchGamesRequest() {
  return {
    type: FETCH_GAMES_REQUEST,
  }
}

export function fetchGamesSuccess(games) {
  return {
    type: FETCH_GAMES_SUCCESS,
    games
  }
}

export function fetchGamesFailed() {
  return {
    type: FETCH_GAMES_FAILED,
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME_TO_MYGAMES,
    game
  }
}

export function checkGame(game) {
  return {
    type: CHECK_GAME,
    game
  }
} 

export const addGameIfNew = game => (dispatch, getState) => {
  const state = getState().myGames
  let gameAlreadyAdded = state.find(myGame => myGame.id === game.id)
  let status

  gameAlreadyAdded ? status = 'error' : status = 'success'
  alertAddGame(game, gameAlreadyAdded, status)

  status === 'success' ? dispatch(addGame(game)) : console.log('no dispatch')
}

export const fetchGames = input => dispatch => {
  dispatch(fetchGamesRequest())
  return fetch('http://localhost:5000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      search: input
    })
  })
  .then( res => res.json(), err => console.log(err)) 
  .then( results => dispatch(fetchGamesSuccess(results)))
  // .catch( err => fetchGamesFailed())
}
