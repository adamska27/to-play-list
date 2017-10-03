export const FETCH_GAMES_START = 'FETCH_START'
export const FETCH_GAMES = 'FETCH_GAMES'
export const FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED'

export const ADD_GAME_TO_MYGAMES = 'ADD_GAME_TO_MYGAMES'

export function fetchGamesStart() {
  return {
    type: FETCH_GAMES_START,
  }
}

export function fetchGames(games) {
  return {
    type: FETCH_GAMES,
    games
  }
}

export function fetchGamesFailed(err) {
  return {
    type: FETCH_GAMES_FAILED,
    err
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME_TO_MYGAMES,
    game
  }
}