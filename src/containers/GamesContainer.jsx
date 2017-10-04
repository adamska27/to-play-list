import React, { Component } from 'react'
import Header from '../components/global/Header'
import Input from '../components/global/Input'
import Button from '../components/global/Button'
import Loader from '../components/global/Loader'
import GamesList from '../components/GamesList'

import swal from 'sweetalert'

import { connect } from 'react-redux'
import { fetchGames, fetchGamesFailed, fetchGamesSuccess, addGame } from '../Redux/actions'

class GamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({search: e.target.value})
  }

  searchGame(e) {
    e.preventDefault()
    this.props.fetchGames()
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
        search: ''
        })
        this.props.fetchGamesSuccess(results)
      })
      .catch( err => {
        this.setState({
          search: '',
          })
        console.log('error: ', err.message)
        if (this.props.fetchGamesFailed()) swal('oups', `une erreur s'est produite`, 'error')
      })
  }

  render() {
    let { search } = this.state
    const {handleChange, searchGame} = this
    let { gamesList } = this.props

    return(
      <section className="ui segment">
          <Header text='Cherchez un jeu à ajouter à votre to play list' />
          <form className="ui form" onSubmit={searchGame.bind(this)} >
            <Input label="Entrez votre recherche: "
              name="search"
              value={search}
              handleChange={handleChange} />
            <Button type='submit' text='valider'/>
          </form>

          {gamesList.fetching ? <Loader /> : ""}
          <hr/>

          <GamesList {...this.props} />

        </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchGames, fetchGamesFailed, fetchGamesSuccess, addGame })(GamesContainer)
