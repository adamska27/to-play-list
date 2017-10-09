import { combineReducers } from 'redux'
import gamesList from './gamesList'
import myGames from './myGames'
import filterStatus from './filterStatus'

const rootReducer = combineReducers({ gamesList,  myGames, filterStatus })

export default rootReducer