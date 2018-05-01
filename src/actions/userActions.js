import {api} from '../services/api'
const headers = api.auth.headers

export function fetchUserData(id) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_USER_DATA_REQUEST' });
    return fetch(`http://localhost:3000/api/v1/users/${id}`, {
      headers: headers
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'FETCH_USER', payload: user }));
  };
}

export function addGigToUser(gig){
  return (dispatch) => {
    dispatch({type: 'START_ADDING_GIG_TO_USER'})
    return fetch(`http://localhost:3000/api/v1/user_gigs/`,{
      method: 'POST',
      body: JSON.stringify(gig),
      headers: headers
    })
    .then(resp => resp.json())
    .then(json => dispatch({type: 'ADD_GIG_TO_USER', payload: gig}))
  }
}

export function removeGigFromUser(gig){
  return (dispatch) => {
    dispatch({type: "START_REMOVING_GIG_FROM_USER"})
    return fetch(`http://localhost:3000/api/v1/user_gigs/${gig.id}`, {
      method: 'DELETE',
      headers: headers
    })
    .then(resp => resp.json())
    .then(gigs => dispatch({type: "REMOVE_GIG_FROM_USER", payload: gig}))
  }
}
