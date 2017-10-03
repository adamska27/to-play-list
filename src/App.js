import React, { Component } from 'react'
import './App.css'
// import ToPlayList from './containers/ToPlayList'
import GamesContainer from "./containers/GamesContainer";
import MyGamesContainer from './containers/MyGamesContainer'


class App extends Component {
  render() {
    return(
      <div className="app-content">
        <GamesContainer  />
        <MyGamesContainer />
      </div>
    )
  }
}

export default App
