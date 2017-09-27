import React from 'react'

const GamesItem = ({game, addGame}) => {

  let re = /thumb/
  let srcImg = ""
  game.cover !== undefined ? srcImg = (`https:${game.cover.url}`).replace(re, 'cover_big') : srcImg = 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'

  return(
    <div className= "item">
      <div className="ui small image">
        <img src={srcImg} alt="#"/>
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
