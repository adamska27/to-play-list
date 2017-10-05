import React, { Component } from 'react'
import './App.css'
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
          <MyGamesContainer />
        </div>
      </Provider>
    )
  }
}

export default App
