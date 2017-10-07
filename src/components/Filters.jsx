import React, { Component } from 'react'
import Button from './global/Button'

class Filters extends Component {

    styleFilter(e) {
        const buttons = document.getElementsByClassName('filter-button')
        Array.from(buttons).map( button => button.classList.remove("active"))
        e.target.classList.add("active")
    }

    render() {
        const { filterMyGames } = this.props

        return(
            <div className="filter-container">
                <Button 
                    className="filter-button active" 
                    onClick={(e) => {
                        filterMyGames('all')
                        this.styleFilter(e)
                        }
                    } 
                    text="Tous" />
                <Button 
                    className="filter-button"
                    onClick={(e) => {
                        filterMyGames('played')
                        this.styleFilter(e)
                        }
                    }
                    text="Joué" />
                <Button 
                    className="filter-button"
                    onClick={(e) => {
                        filterMyGames('to play')
                        this.styleFilter(e)
                        }
                    }
                    text="A jouer" />
            </div>
        )
    }
}

export default Filters