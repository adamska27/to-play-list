import React, { Component } from 'react'
import GamesItem from './GamesItem'
import swal from 'sweetalert'

class GamesList extends Component {

  getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

  addGame(id) {
    const gameToAdd = this.props.gamesList.games.find( game => game.id === id)

    if (this.props.myGames.find( game => game.id === gameToAdd.id)) {
      swal({
        title: "Oups !",
        text: `${gameToAdd.name} fait déjà parti de votre to play list`,
        icon: "error"
      })
    } else {
        this.props.addGame(gameToAdd)
        swal({
          title: "Bien joué",
          text: `${gameToAdd.name} a bien été ajouté`,
          icon: "success"
        })
      }
  }

  render() {
    const { getBetterImg, addGame} = this
    console.log('gameslist props: ', this.props)

    return(
      <div className="ui divided items">
        {this.props.gamesList.games ? (this.props.gamesList.games.map( (game, index) => {
          return (
            <GamesItem
              key={game.id}
              game={game}
              played={game.played}
              addGame={addGame.bind(this, game.id)}
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
