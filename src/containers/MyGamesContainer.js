import MyGamesList from '../components/MyGamesList'

import { connect } from 'react-redux'
import { checkGame } from '../Redux/actions'
  
const getMyGamesFiltered = (myGames, filter) => {
    switch(filter) {
        case 'all':
            return myGames
        case 'to play':
            return myGames.filter( myGame => !myGame.played)
        case 'played':
            return myGames.filter( myGame => myGame.played)
        default:
            return myGames
    }
}

const mapStateToProps = (state) => {
    return {
        myGames: getMyGamesFiltered(state.myGames, state.filterStatus)
    }
}

const mapDispathcToProps = (dispatch) => {
    return {
        onCheckGame: (game) => dispatch(checkGame(game)) 
    }
}

const MyGamesContainer = connect(
    mapStateToProps,
    mapDispathcToProps
)(MyGamesList)

export default MyGamesContainer