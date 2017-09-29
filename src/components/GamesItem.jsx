import React from 'react'
import Button from './Button'

const GamesItem = ({game, addGame, getBetterImg}) => {

  let srcImg = getBetterImg(game)

  return(
    <div className= "item">
      <div className="ui tiny image">
        <img src={srcImg} alt={game.name}/>
      </div>
      <div className="middle aligned content">
        <a className="header">{game.name}</a>
        {/* <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p></p>
        </div> */}
        <div className="extra">
          <Button className="ui right floated button" onClick={addGame} text="Ajouter"/>
        </div>
      </div>
    </div>
  )
}

export default GamesItem
