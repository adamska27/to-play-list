import React from 'react'
import Button from './global/Button'

const getBetterImg = (game) => {
  const regex = /thumb/
  //change url to get better quality img
  //if img doesn't exist throw an basic img
  return game.cover !== undefined ? (`https:${game.cover.url}`).replace(regex, 'cover_big') : 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'
}

const mysGamesItem = ({myGame, checkGame}) => {
  let classMyGame = ""
  //add a specific class to game played
  if (myGame.played) classMyGame = "played"

  //convert the date and remove the day
  const date = new Date(myGame.release_dates[0].date).toDateString().slice(3)

  return(
    <div className={`card ${classMyGame}`}>
      <div className="image">
        <img src={getBetterImg(myGame)} alt={myGame.name} /></div>
      <div className="content">
        <a className="header">{myGame.name}</a>
        <div className="meta">
          <span className="date">date de sortie: {date}</span>
        </div>
        <div className="description">
          <div>
            {myGame.summary ? `${myGame.summary.substring(0, 150)} (...)` : 'summary no available'}
            </div>
          <Button 
            onClick={checkGame}
            text={`${myGame.played ? "Joué!" : "Tu as déjà joué à ce jeu?"}`} 
          />
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="heart icon" style={{color: 'rgba(223, 62, 123, 1)'}}></i>
          {myGame.hypes ? myGame.hypes : "No likes"}
        </a>
      </div>
    </div>
  )
}

export default mysGamesItem
