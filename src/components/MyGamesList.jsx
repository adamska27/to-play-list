import React,{ Component } from 'react'
import MyGamesItem from '../components/MyGamesItem'

class MyGamesList extends Component {

    getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

    showFilteredMyGames() {
        let { myGames, filterStatus } = this.props

        if (filterStatus === 'all') {
            return myGames 
        } else if (filterStatus === 'played') {
            return myGames.filter( myGame => myGame.played)
        } else {
            return myGames.filter( myGame => !myGame.played)
        }
    }

    render() {
        const { getBetterImg } = this
        let { checkGame } = this.props

        return(
            <div className="ui link cards myGames-list">
                {this.showFilteredMyGames().map( myGame => {
                    return (
                        <MyGamesItem
                            key={myGame.id}
                            myGame={myGame}
                            checkGame={() => checkGame(myGame)}
                            getBetterImg={getBetterImg.bind(this)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MyGamesList