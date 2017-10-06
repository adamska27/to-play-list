import React, { Component } from 'react'
import GamesItem from './GamesItem'

class GamesList extends Component {

  getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big')
     : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

  render() {
    const { getBetterImg } = this
    let { gamesList } = this.props

    return(
      <div className="ui divided items">
        {gamesList.games ? (gamesList.games.map( (game, index) => {
          return (
            <GamesItem
              key={game.id}
              game={game}
              played={game.played}
              addGame={() => this.props.addGameIfNew(game)}
              getBetterImg={getBetterImg.bind(this, game)}
            />)
          })
        )
        :
        ""
        }
      </div>
    )
  }
}

export default GamesList
