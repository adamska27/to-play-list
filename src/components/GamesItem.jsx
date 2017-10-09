import React from 'react'
import Button from './global/Button'

const GamesItem = ({game, addGame}) => {

  const getBetterImg =  (game) => {
    const regex = /thumb/
    //change url to get better quality img
    //if img doesn't exist throw an basic img
    return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
  }
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
