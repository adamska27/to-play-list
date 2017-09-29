import React, { Component } from 'react'
import Loader from '../components/Loader'
import Header from '../components/Header'
import GamesItem from '../components/GamesItem'
import MyGamesItem from '../components/MyGamesItem'
import Input from '../components/Input'
import Button from '../components/Button'

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
      loader: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: [e.target.value]})
  }

  checkGame(index) {
    const game = this.state.myGames[index]
    game.played =!game.played
    this.setState({myGames: this.state.myGames})
  }

  selectFilter(filter, e) {
    let buttons = document.getElementsByClassName('filter-button')
    Array.from(buttons).map( button => button.classList.remove("active"))
    e.target.classList.add("active")

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
    this.setState({loader: true})
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
      .then( result => this.setState({games: result, search: '', loader: false}))
      .catch( err => console.log(err))
  }

  addGame(index) {
    let gameToAdd = this.state.games[index]
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

  getBetterImg (game) {
    let regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }

  render() {
    let {filter} = this.state
    let {selectFilter, checkGame, handleChange, searchGame, addGame, getBetterImg} = this

    let games = []

    if (filter === 'all') {
      games = this.state.myGames
    } else if (filter === 'played') {
      games = this.state.gamesPlayed
    } else if (filter === 'to play') {
      games = this.state.gamesToPlay
    }

    return(
      <div className="app-content">

        <section className="ui segment">
          <Header text='Cherchez un jeu à ajouter à votre to play list' />
          <form className="ui form" onSubmit={searchGame.bind(this)} >
            <Input label="Entrez votre recherche: "
              name="search"
              value={this.state.search}
              handleChange={handleChange} />
            <Button type='submit' text='valider'/>
          </form>

          {this.state.loader ? (
            <Loader />
          )
            :
            console.log('loader: ', this.state.loader)
          }

          <hr/>

          <div className="ui divided items">
            {this.state.games.map( (game, index) => {
              return (
                <GamesItem
                  key={game.id}
                  game={game}
                  played={game.played}
                  addGame={addGame.bind(this, index)}
                  getBetterImg={getBetterImg.bind(this, game)}
                />)
            })}
          </div>
        </section>

        <section className="ui segment myGames-container">
          <Header text='Votre to play list' />
          <div className="filter-container">
            <Button className="filter-button active" onClick={selectFilter.bind(this, 'all')} text="Tous" />
            <Button className="filter-button" onClick={selectFilter.bind(this, 'played')} text="Joué" />
            <Button className="filter-button" onClick={selectFilter.bind(this, 'to play')} text="A jouer" />
          </div>

          <div className="ui link cards myGames-list">
            {games ? (games.map( (game, index) => {
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
            }
          </div>
        </section>
      </div>
    )
  }
}
export default GamesList
