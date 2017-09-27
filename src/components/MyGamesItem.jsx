import React from 'react'

const mysGamesItem = ({game, checkGame}) => {
  let classGame = ""
  if (game.played) classGame = "played"

  let re = /thumb/
  let srcImg = ""
  game.cover !== undefined ? srcImg = (`https:${game.cover.url}`).replace(re, 'cover_big') : srcImg = 'http://studiofalour.com/wp-content/uploads/2016/06/client-mystere-chou-rave-studiofalour-web.jpg'

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
