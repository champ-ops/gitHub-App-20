import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import allReducers from './data'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data: allReducers
  })

export default createRootReducer
