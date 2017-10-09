import React from 'react'
import Button from './global/Button'

const mysGamesItem = ({myGame, checkGame, getBetterImg}) => {
  let classMyGame = ""
  //add a specific class to game played
  if (myGame.played) classMyGame = "played"

  let srcImg = getBetterImg(myGame)
  console.log(myGame)

  //convert the date and remove the day
  const date = new Date(myGame.release_dates[0].date).toDateString().slice(3)

  return(
    <div className={`card ${classMyGame}`}>
      <div className="image">
        <img src={srcImg} alt={myGame.name} /></div>
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
