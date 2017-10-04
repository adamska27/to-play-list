export const FETCH_GAMES = 'FETCH_GAMES'
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS'
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED'

export const ADD_GAME_TO_MYGAMES = 'ADD_GAME_TO_MYGAMES'

export function fetchGames() {
  return {
    type: FETCH_GAMES,
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