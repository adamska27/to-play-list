import myGames from './myGames'

it('return initial state, by default = []', () => {
    expect(myGames([], {type: ''})).toEqual([])
})

it('return the new game in the array', () => {
    expect(myGames(
        [], 
        {type: 'ADD_GAME_TO_MYGAMES',
        game: {title: 'Mario'}}
    )).toEqual([
        {title: 'Mario', played: false}
    ])
})


it('return the game with the property played inverted', () => {
    expect(myGames(
        [{id: 0, title: 'Mario', played: false}], 
        {type: 'CHECK_GAME',
        game: {id: 0, title: 'Mario', played: false}}
    )).toEqual([
        {id: 0, title: 'Mario', played: true}
    ])
})


