import MyGamesList from '../components/MyGamesList'

import { connect } from 'react-redux'
import { checkGame } from '../Redux/actions'

export const getBetterImg = (game) => {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }
  
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