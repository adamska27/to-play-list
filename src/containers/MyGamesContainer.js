import React, { Component } from 'react'
import Header from '../components/global/Header'
import Button from '../components/global/Button'
import MyGamesList from '../components/MyGamesList'

import { connect } from 'react-redux'
import { checkGame } from '../Redux/actions'


class MyGames extends Component {    
    
    selectFilter(filter, e) {
        const buttons = document.getElementsByClassName('filter-button')
        Array.from(buttons).map( button => button.classList.remove("active"))
        e.target.classList.add("active")

        if (filter === 'played') {
            const gamesPlayed = this.state.myGames.filter( (game) => game.played)
            this.setState({gamesPlayed})
        } else if (filter === 'all') {
            this.setState({myGames: this.state.myGames})
        } else if (filter === 'to play') {
            const gamesToPlay = this.state.myGames.filter( (game) => !game.played)
            this.setState({gamesToPlay})
        }
        this.setState({filter: filter})
    }

    render() {
        console.log('this.props myGamesContainer', this.props)
        const {selectFilter} = this
    
        // let myFilteredGames = []
    
        // if (filter === 'all') {
        //   myFilteredGames = this.state.myGames
        // } else if (filter === 'played') {
        //   myFilteredGames = this.state.gamesPlayed
        // } else if (filter === 'to play') {
        //   myFilteredGames = this.state.gamesToPlay
        // }    

        return(
            <section className="ui segment myGames-container">
                <Header text='Votre to play list' />
                <div className="filter-container">
                    <Button className="filter-button active" onClick={selectFilter.bind(this, 'all')} text="Tous" />
                    <Button className="filter-button" onClick={selectFilter.bind(this, 'played')} text="Joué" />
                    <Button className="filter-button" onClick={selectFilter.bind(this, 'to play')} text="A jouer" />
                </div>

                <MyGamesList {...this.props} />

            </section>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, { checkGame })(MyGames)



