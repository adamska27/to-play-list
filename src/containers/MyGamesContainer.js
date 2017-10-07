import MyGamesList from '../components/MyGamesList'

import { connect } from 'react-redux'
import { checkGame, filterMyGames } from '../Redux/actions'

const mapStateToProps = (state) => state

const MyGamesContainer = connect(
    mapStateToProps,
    { checkGame, filterMyGames }
)(MyGamesList)

export default MyGamesContainer