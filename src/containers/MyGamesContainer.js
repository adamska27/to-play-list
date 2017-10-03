import React, { Component } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import MyGamesItem from '../components/MyGamesItem'


class MyGames extends Component {
    checkGame(index) {
        let game = this.state.myGames[index]
        game.played =!game.played
        this.setState({myGames: this.state.myGames})
    }
    
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
        let {filter, search, loader, games} = this.state
        const {selectFilter, checkGame, handleChange, searchGame, addGame, getBetterImg} = this
    
        let myFilteredGames = []
    
        if (filter === 'all') {
          myFilteredGames = this.state.myGames
        } else if (filter === 'played') {
          myFilteredGames = this.state.gamesPlayed
        } else if (filter === 'to play') {
          myFilteredGames = this.state.gamesToPlay
        }    

        return(
            <section className="ui segment myGames-container">
                <Header text='Votre to play list' />
                <div className="filter-container">
                    <Button className="filter-button active" onClick={selectFilter.bind(this, 'all')} text="Tous" />
                    <Button className="filter-button" onClick={selectFilter.bind(this, 'played')} text="Joué" />
                    <Button className="filter-button" onClick={selectFilter.bind(this, 'to play')} text="A jouer" />
                </div>

                <div className="ui link cards myGames-list">
                    {myFilteredGames ? (myFilteredGames.map( (game, index) => {
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
        )
    }
}

export default MyGames



