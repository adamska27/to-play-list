import React, { Component } from 'react'
import GamesItem from './GamesItem'
import swal from 'sweetalert'

import { connect } from 'react-redux'
import { fetchGames } from '../Redux/actions'


class GamesList extends Component {

  getBetterImg (game) {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

  addGame(index) {
    const gameToAdd = this.state.games[index]
    if (this.state.myGames.includes(gameToAdd)) {
      swal({
        title: "Oups !",
        text: `${gameToAdd.name} fait déjà parti de votre to play list`,
        icon: "error"
      })
    } else {
      this.setState({
        myGames: [...this.state.myGames, gameToAdd]
      })
      swal({
        title: "Bien joué",
        text: `${gameToAdd.name} a bien été ajouté`,
        icon: "success"
      })
    }
  }

  render() {
    const {handleChange, searchGame, getBetterImg, addGame} = this

    // console.log('this.props GamesList: ', this.props )

    return(
      <div className="ui divided items">
        {this.props.gamesList.games ? (this.props.gamesList.games.map( (game, index) => {
          return (
            <GamesItem
              key={game.id}
              game={game}
              played={game.played}
              addGame={addGame.bind(this, index)}
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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(GamesList)
