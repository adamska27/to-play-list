import React, { Component } from 'react'
import GamesItem from './GamesItem'
import Loader from './global/Loader'

class GamesList extends Component {

  render() {
    let { games, fetching, addGameIfNew } = this.props

    return(
      <div className="ui divided items">

        {fetching ? <Loader /> : ""}

        {games.length ? (games.map( (game, index) => {
          return (
            <GamesItem
              key={game.id}
              game={game}
              played={game.played}
              addGame={() => addGameIfNew(game)}
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
