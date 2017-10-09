import GamesList from '../components/GamesList'

import { connect } from 'react-redux'
import { addGameIfNew } from '../Redux/actions'

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