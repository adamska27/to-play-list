import React, { Component } from 'react'
import Header from '../components/global/Header'
import MyGamesList from '../components/MyGamesList'
import Filters from '../components/Filters'

import { connect } from 'react-redux'
import { checkGame, filterMyGames } from '../Redux/actions'


class MyGames extends Component {    
    
    render() {
        return(
            <section className="ui segment myGames-container">
                <Header text='Votre to play list' />
                
                <Filters {...this.props} />

                <MyGamesList {...this.props} />

            </section>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, { checkGame, filterMyGames })(MyGames)



