import React,{ Component } from 'react'
import MyGamesItem from '../components/MyGamesItem'


class MyGamesList extends Component {

    checkGame(index) {
        let game = this.state.myGames[index]
        game.played =!game.played
        this.setState({myGames: this.state.myGames})
    }

    getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

    render() {
        
        const { checkGame, getBetterImg } = this

        return(
            <div className="ui link cards myGames-list">
                <h2>MyGamesList</h2>
                {/* {myFilteredGames ? (myFilteredGames.map( (game, index) => {
                    //add property 'played' to game in order to filter later
                    if (game.played === undefined) game.played = false
                    return (
                    <MyGamesItem
                        key={game.id}
                        game={game}
                        played={game.played}
                        checkGame={checkGame.bind(this, index)}
                        getBetterImg={getBetterImg.bind(this)}
                    />
                    )
                })
                )
                    :
                    console.log('noMyGames')
                } */}
            </div>
        )
    }
}

export default MyGamesList