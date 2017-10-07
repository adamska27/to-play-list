import React, { PureComponent } from 'react'
import Button from './global/Button'

class Filters extends PureComponent {

    styleFilter(e) {
        const buttons = document.getElementsByClassName('filter-button')
        Array.from(buttons).map( button => button.classList.remove("active"))
        e.target.classList.add("active")
    }

    render() {
        const { filterMyGames } = this.props
        const { styleFilter } = this

        return(
            <div className="filter-container">
                <Button 
                    className="filter-button active" 
                    onClick={(e) => {
                        filterMyGames('all')
                        styleFilter(e)
                        }
                    } 
                    text="Tous" 
                />
                <Button 
                    className="filter-button"
                    onClick={(e) => {
                        filterMyGames('played')
                        styleFilter(e)
                        }
                    }
                    text="Joué" 
                />
                <Button 
                    className="filter-button"
                    onClick={(e) => {
                        filterMyGames('to play')
                        styleFilter(e)
                        }
                    }
                    text="A jouer" 
                />
            </div>
        )
    }
}

export default Filters