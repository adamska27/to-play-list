import React,{ Component } from 'react'
import MyGamesItem from '../components/MyGamesItem'

class MyGamesList extends Component {

    getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

    render() {
        console.log('this.props myGamesList', this.props)
        const { getBetterImg } = this

        let { myGames } = this.props

        return(
            <div className="ui link cards myGames-list">
                {
                    myGames ? (myGames.map( (myGame, index) => {
                    return (
                    <MyGamesItem
                        key={myGame.id}
                        myGame={myGame}
                        checkGame={() => this.props.checkGame(myGame)}
                        getBetterImg={getBetterImg.bind(this)}
                    />)
                    }))
                    :
                    console.log('noMyGames')
                }
            </div>
        )
    }
}

export default MyGamesList