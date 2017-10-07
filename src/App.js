import React, { Component } from 'react'
import './App.css'
import Header from './components/global/Header'
import FiltersContainer from './containers/FiltersContainer'
import GamesContainer from "./containers/GamesContainer";
import MyGamesContainer from './containers/MyGamesContainer'
import { Provider } from 'react-redux'
import store from './Redux/store'

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <div className="app-content">
          <GamesContainer  />
          <section className="ui segment myGames-container">
            <Header text='Votre to play list' />  
            <FiltersContainer />
            <MyGamesContainer />
          </section>
        </div>
      </Provider>
    )
  }
}

export default App
