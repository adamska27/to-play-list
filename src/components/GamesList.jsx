import React, { Component } from 'react'
import GamesItem from './GamesItem'
import Loader from './global/Loader'

class GamesList extends Component {

  getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big')
     : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

  // showErrMessage() {
  //   if (this.props.gamesList.error) <h2>Error</h2>
  // }

  render() {
    const { getBetterImg } = this
    let { games, fetching } = this.props

    console.log(this.props)

    return(
      <div className="ui divided items">

        {fetching ? <Loader /> : ""}

        {games.length ? (games.map( (game, index) => {
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

        {this.showErrMessage}
      </div>
    )
  }
}

export default GamesList
