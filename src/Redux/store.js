import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const enhancer = compose(
    applyMiddleware(thunk),
    persistState()
)

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__(), enhancer)

export default store
