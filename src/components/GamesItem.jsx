import React from 'react'
import Button from './global/Button'

const GamesItem = ({game, addGame, getBetterImg}) => {

  let srcImg = getBetterImg(game)

  return(
    <div className= "item">
      <div className="ui tiny image">
        <img src={srcImg} alt={game.name}/>
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
