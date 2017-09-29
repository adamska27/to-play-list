import React from 'react'
import Button from './Button'

const mysGamesItem = ({game, checkGame, getBetterImg}) => {
  let classGame = ""
  //add a specific class to game played
  if (game.played) classGame = "played"

  let srcImg = getBetterImg(game)

  //convert the date and remove the release day
  let date = new Date(game.release_dates[0].date).toDateString().slice(3)

  return(
    <div className={`card ${classGame}`}>
      <div className="image">
        <img src={srcImg} alt={game.name} /></div>
      <div className="content">
        <a className="header">{game.name}</a>
        <div className="meta">
          <span className="date">date de sortie: {date}</span>
        </div>
        <div className="description">
          <div>{game.summary ? `${game.summary.substring(0, 150)} (...)` : 'summary no available'}</div>
          <Button onClick={checkGame} text={`${game.played ? "Joué!" : "Tu as déjà joué à ce jeu?"}`} />
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="heart icon" style={{color: 'rgba(223, 62, 123, 1)'}}></i>
          {game.hypes ? game.hypes : "No likes"}
        </a>
      </div>
    </div>
  )
}

export default mysGamesItem
