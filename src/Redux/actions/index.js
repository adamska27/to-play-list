import { alertAddGame } from '../helpers'

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST'
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS'
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED'
export const ADD_GAME_TO_MYGAMES = 'ADD_GAME_TO_MYGAMES'
export const CHECK_GAME = 'CHECK_GAME'
export const FILTER_MYGAMES = 'FILTER_MYGAMES'

export const filterMyGames = (filterStatus) => {
  return {
  type: FILTER_MYGAMES,
  filterStatus
  }
}

export const fetchGamesRequest = () => {
  return {
    type: FETCH_GAMES_REQUEST,
  }
}

export const fetchGamesSuccess = (games) => {
  return {
    type: FETCH_GAMES_SUCCESS,
    games
  }
}

export const fetchGamesFailed = () => {
  return {
    type: FETCH_GAMES_FAILED,
  }
}

export const addGame = (game) => {
  return {
    type: ADD_GAME_TO_MYGAMES,
    game
  }
}

export const checkGame = (game) => {
  return {
    type: CHECK_GAME,
    game
  }
} 

export const addGameIfNew = game => (dispatch, getState) => {
  const state = getState().myGames
  let gameAlreadyAdded = state.find(myGame => myGame.id === game.id)
  let status

  if (gameAlreadyAdded) {
    status = 'error'
  } else {
    status = 'success'
    dispatch(addGame(game))
  }

  alertAddGame(game, status)  
}

export const fetchGames = input => dispatch => {
  dispatch(fetchGamesRequest())
  fetch('http://localhost:5000/', {
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
}
