import React, { Component } from 'react'
import Loader from '../components/global/Loader'
import GamesList from '../components/GamesList'

import { connect } from 'react-redux'
import { addGameIfNew } from '../Redux/actions'

class GamesContainer extends Component {

  render() {
    let { gamesList } = this.props

    return(
        <div>
          {gamesList.fetching ? <Loader /> : ""}
          <hr/>

          <GamesList {...this.props} />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { addGameIfNew })(GamesContainer)
