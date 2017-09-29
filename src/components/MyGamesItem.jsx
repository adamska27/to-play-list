import React from 'react'

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
          <button onClick={checkGame}>{game.played ? <i className="checkmark icon"></i> : "you play this game?"}</button>
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="heart icon"></i>
          {game.hypes ? game.hypes : "No likes"}
        </a>
      </div>
    </div>
  )
}

export default mysGamesItem
