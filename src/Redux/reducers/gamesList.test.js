import gamesList from './gamesList'

test('return initial state to be an objetc with default properties', () => {
    expect(gamesList({
        games: [],
        fetching: false,
        fetched: false,
        error: false,
    },{
        type: '',
    }
)).toEqual({
        games: [],
        fetching: false,
        fetched: false,
        error: false,
    })
})

test('return the state with property fetching true', () => {
    expect(gamesList({
        games: [],
        fetching: false,
        fetched: false,
        error: false,
    },{
        type: 'FETCH_GAMES_REQUEST',
    }
)).toEqual({
        games: [],
        fetching: true,
        fetched: false,
        error: false,
    })
})

test('return the state with property fetching false and fetched true', () => {
    expect(gamesList({
        games: [],
        fetching: true,
        fetched: false,
        error: false,
    },{
        type: 'FETCH_GAMES_SUCCESS',
        games: []
    }
)).toEqual({
        games: [],
        fetching: false,
        fetched: true,
        error: false,
    })
})

test('return the state with property fetching false fetched false and error true', () => {
    expect(gamesList({
        games: [],
        fetching: true,
        fetched: false,
        error: false,
    },{
        type: 'FETCH_GAMES_FAILED',
    }
)).toEqual({
        games: [],
        fetching: false,
        fetched: false,
        error: true,
    })
})
    

