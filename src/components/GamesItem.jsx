import React from 'react'

const GamesItem = ({game, addGame}) => {

  let re = /thumb/
  let srcImg = ""
  game.cover !== undefined ? srcImg = (`https:${game.cover.url}`).replace(re, 'cover_big') : srcImg = 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'

  return(
    <li onClick={addGame}>
      <div className= "ui items">
        <div className="item">
          <div className="image">
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
              Additional Details
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default GamesItem
