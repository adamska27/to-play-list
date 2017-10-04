import React, { Component } from 'react'
import Header from '../components/global/Header'
import Input from '../components/global/Input'
import Button from '../components/global/Button'
import Loader from '../components/global/Loader'
import GamesList from '../components/GamesList'

import swal from 'sweetalert'

import { connect } from 'react-redux'
import { fetchGames, addGame } from '../Redux/actions'

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

  render() {
    let { search } = this.state
    const {handleChange, searchGame} = this
    let { gamesList } = this.props

    return(
      <section className="ui segment">
          <Header text='Cherchez un jeu à ajouter à votre to play list' />
          <form 
            className="ui form" 
            onSubmit={(e) => {
              e.preventDefault()
              this.props.fetchGames(this.state.search)}
              }
            >
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

export default connect(mapStateToProps, { addGame, fetchGames })(GamesContainer)
