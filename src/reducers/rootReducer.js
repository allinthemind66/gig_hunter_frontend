import { combineReducers } from 'redux';
import gigs from './gigs'
import users from './users'
export default combineReducers({
  gigs,
  users
})
