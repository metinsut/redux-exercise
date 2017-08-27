import { combineReducers } from 'redux'
import user from './user'
import getAPI from './getAPI'

const userApp = combineReducers({
  user,
  getAPI
})

export default userApp
