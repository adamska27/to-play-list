import React from 'react'

const GamesItem = ({game, addGame, getBetterImg}) => {

  let srcImg = getBetterImg(game)

  return(
    <div className= "item">
      <div className="ui small image">
        <img src={srcImg} alt={game.name}/>
      </div>
      <div className="content">
        <a className="header">{game.name}</a>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p></p>
        </div>
        <div className="extra">
          <div className="ui right floated button" onClick={addGame}>Ajouter</div>
        </div>
      </div>
    </div>
  )
}

export default GamesItem
