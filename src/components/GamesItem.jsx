import React from 'react'
import Button from './global/Button'

const GamesItem = ({game, addGame}) => {

  return(
    <div className= "item">
      <div className="ui tiny image">
        <img src={game.cover ? `https:${game.cover.url}` :
         'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'}
         alt={game.name}/>
      </div>
      <div className="middle aligned content">
        <a className="header">{game.name}</a>
        <div className="extra">
          <Button className="ui right floated button" onClick={addGame} text="Ajouter"/>
        </div>
      </div>
    </div>
  )
}

export default GamesItem
