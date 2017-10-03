import React, { Component } from 'react'
import './App.css'
import ToPlayList from './containers/ToPlayList'
import GamesList from './components/GamesList'
import GamesContainer from "./containers/GamesContainer";


class App extends Component {
  render() {
    return(
      <div className="app-content">
        <GamesContainer  />
      </div>
    )
  }
}

export default App
