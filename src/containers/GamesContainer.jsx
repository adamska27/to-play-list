import GamesList from '../components/GamesList'

import { connect } from 'react-redux'
import { addGameIfNew } from '../Redux/actions'

export const getBetterImg = (game) => {
  const regex = /thumb/
  //change url to get better quality img
  //if img doesn't exist throw an basic img
  return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
}

const mapStateToProps = (state) => {
  return {
    fetching: state.gamesList.fetching,
    games: state.gamesList.games
  }
}

const GamesContainer = connect(
  mapStateToProps,
  { addGameIfNew }
)(GamesList)

export default GamesContainer