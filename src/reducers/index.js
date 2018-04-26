import { combineReducers } from 'redux';
import gigs from './gigs'
import session from './sessionReducer'
export default combineReducers({
  session,
  gigs
})
