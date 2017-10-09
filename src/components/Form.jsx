import React, { Component } from 'react'
import Input from './global/Input'
import Button from '../components/global/Button'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let { search } = this.state
        const { fetchGames } = this.props

        return(
            <form 
                className="ui form" 
                onSubmit={(e) => {
                e.preventDefault()
                fetchGames(this.state.search)
                this.setState({search: ''})
              }}>
                <Input 
                    label="Entrez votre recherche: "
                    name="search"
                    value={search}
                    handleChange={this.handleChange} 
                />
                <Button type='submit' text='valider'/>
            </form>
        )
    }
}

export default Form