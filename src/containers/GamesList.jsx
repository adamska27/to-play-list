import React, { Component } from 'react'
import GamesItem from '../components/GamesItem';
import MyGamesItem from '../components/MyGamesItem';
import Input from '../components/Input';
import '../App.css'

import swal from 'sweetalert'

class GamesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
      myGames: [],
      gamesPlayed: [],
      gamesToPlay: [],
      search: '',
      filter: 'all',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  checkGame(index) {
    const game = this.state.myGames[index]
    game.played =!game.played
    this.setState({myGames: this.state.myGames})
  }

  selectFilter(filter) {
    if (filter === 'played') {
      let gamesPlayed = this.state.myGames.filter( (game) => game.played)
      this.setState({gamesPlayed})
      console.log('played')
    } else if (filter === 'all') {
      this.setState({myGames: this.state.myGames})
      console.log('all')
    } else if (filter === 'to play') {
      let gamesToPlay = this.state.myGames.filter( (game) => !game.played)
      this.setState({gamesToPlay})
      console.log('to play')
    }
    this.setState({filter: filter})
  }

  searchGame(e) {
    e.preventDefault()
    fetch('http://localhost:5000/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        search: this.state.search
      })
    })
      .then( res => res.json())
      .then( result => this.setState({games: result, search: ''}))
      .catch( err => console.log(err))
  }

  addGame(index) {
    let gameToAdd = this.state.games[index]
    this.setState({
      myGames: [...this.state.myGames, gameToAdd]
    })
    swal({
      title: "Bien joué",
      text: `${gameToAdd.name} a bien été ajouté`,
      icon: "success"
    })
  }

  render() {
    let {filter} = this.state

    let games = []

    if (filter === 'all') {
      games = this.state.myGames
    } else if (filter === 'played') {
      games = this.state.gamesPlayed
    } else if (filter === 'to play') {
      games = this.state.gamesToPlay
    }

    // if (this.state.search) {
    //   games = games.filter( game => game.name.toLowerCase().includes(this.state.search.toLowerCase()))
    // }

    return(
      <div className="app-content">

        <section className="ui segment">

          <div className="ui sizer vertical segment subtitle">
            <div className="ui huge header subtitle-text">Cherchez un jeu à ajouter à votre to play list</div>
          </div>

          <form className="ui form" onSubmit={this.searchGame.bind(this)} >
            <Input label="Entrez votre recherche: "
              name="search"
              value={this.state.search}
              handleChange={this.handleChange} />
            <button className="ui button" type='submit'>Valider</button>
          </form>

          <div className="ui divided items">
            {this.state.games.map( (game, index) => {
              return (
                <GamesItem
                  key={game.id}
                  game={game}
                  played={game.played}
                  addGame={this.addGame.bind(this, index)}
                />)
            })}
          </div>
        </section>

        <section className="ui segment myGames-container">

          <div className="ui sizer vertical segment subtitle">
            <div className="ui huge header subtitle-text">Votre to play list</div>
          </div>

          <button className="ui button" onClick={this.selectFilter.bind(this, 'all')}>Tous</button>
          <button className="ui button" onClick={this.selectFilter.bind(this, 'played')}>Joué</button>
          <button className="ui button" onClick={this.selectFilter.bind(this, 'to play')}>A faire</button>

          <div className="ui link cards myGames-list">
            {
              games ? (games.map( (game, index) => {
                if (game.played === undefined) game.played = false
                console.log(game)
                return (
                  <MyGamesItem
                    key={game.id}
                    game={game}
                    played={game.played}
                    checkGame={this.checkGame.bind(this, index)}
                  />
                )
              })
              )
                :
                console.log('noMyGames')
            }
          </div>
        </section>
      </div>
    )
  }
}
export default GamesList
