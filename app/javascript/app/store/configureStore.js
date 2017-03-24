import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
})

let middleware = [thunk, createLogger()]

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  )
}