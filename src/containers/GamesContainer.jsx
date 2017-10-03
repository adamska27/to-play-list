import React, { Component } from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader'
import GamesList from '../components/GamesList'

import { connect } from 'react-redux'
import { fetchGames, fetchGamesFailed, fetchGamesStart } from '../Redux/actions'

class GamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      games: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({search: e.target.value})
  }

  searchGame(e) {
    e.preventDefault()
    this.props.fetchGamesStart()
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
      .then( results => {
        this.setState({
        search: '',
        }),
        this.props.fetchGames(results)
      })
      .catch( err => {
        this.setState({
          search: '',
          })
        this.props.fetchGamesFailed(err)
      })
  }

  render() {
    let {filter, search, loader, games} = this.state
    const {handleChange, searchGame} = this

    console.log('this.props GamesContainer: ', this.props)

    return(
      <section className="ui segment" style={{width: '50%'}}>
          <Header text='Cherchez un jeu à ajouter à votre to play list' />
          <form className="ui form" onSubmit={searchGame.bind(this)} >
            <Input label="Entrez votre recherche: "
              name="search"
              value={search}
              handleChange={handleChange} />
            <Button type='submit' text='valider'/>
          </form>

          {this.props.gamesList.loader ? <Loader /> : ""}
          <hr/>

          <GamesList />

        </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchGames, fetchGamesFailed, fetchGamesStart })(GamesContainer)
