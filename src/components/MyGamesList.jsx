import React,{ Component } from 'react'
import MyGamesItem from '../components/MyGamesItem'

class MyGamesList extends Component {
    render() {
        let { onCheckGame, myGames } = this.props

        return(
            <div className="ui link cards myGames-list">
                {myGames.map( myGame => {
                    return (
                        <MyGamesItem
                            key={myGame.id}
                            myGame={myGame}
                            checkGame={() => onCheckGame(myGame)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MyGamesList