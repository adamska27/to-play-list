import React, { Component } from 'react'
import GamesItem from '../components/GamesItem';
import MyGamesItem from '../components/MyGamesItem';
import Input from '../components/Input';
import '../App.css'

class GamesList extends Component {
  constructor(props) {
    super(props);
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
      <div className="content">

        <div className="container-games">
          <form onSubmit={this.searchGame.bind(this)} >
            <Input label="Recherche un jeu à ajouter à votre bibliothèque: "
              name="search"
              value={this.state.search}
              handleChange={this.handleChange} />
          </form>

          <ul>
            {this.state.games.map( (game, index) => {
              return (
                <GamesItem
                  key={game.id}
                  game={game}
                  played={game.played}
                  addGame={this.addGame.bind(this, index)}
                />)
            })}
          </ul>
        </div>

        <div className="container-myGames">

          <button onClick={this.selectFilter.bind(this, 'all')}>Tous</button>
          <button onClick={this.selectFilter.bind(this, 'played')}>Joué</button>
          <button onClick={this.selectFilter.bind(this, 'to play')}>A faire</button>

          <ul className="list-myGames">
            {
              games ? (games.map( (game, index) => {
                if (game.played === null) game.played = false
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
          </ul>
        </div>
      </div>
    )
  }
}
export default GamesList
