import { combineReducers } from 'redux';
import gigs from './gigs'
import users from './users'
import auth from './auth'
import friends from './friends'
export default combineReducers({
  gigs,
  users,
  auth,
  friends
})
