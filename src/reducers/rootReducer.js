import { combineReducers } from 'redux';
import gigs from './gigs'
import users from './users'
import auth from './auth'
export default combineReducers({
  gigs,
  users,
  auth
})
