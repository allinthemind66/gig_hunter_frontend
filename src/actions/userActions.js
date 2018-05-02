// import {api} from '../services/api'
const ROOT_API = 'http://localhost:3000/api/v1'
const token = localStorage.getItem('token')
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
}

export function fetchUserData(id) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_USER_DATA_REQUEST' });
    return fetch(`${ROOT_API}/users/${id}`, {
      headers: headers
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'FETCH_USER', payload: user }));
  };
}

export function addGigToUser(gig){
  return (dispatch) => {
    dispatch({type: 'START_ADDING_GIG_TO_USER'})
    return fetch(`${ROOT_API}/user_gigs/`,{
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
    return fetch(`${ROOT_API}/user_gigs/${gig.id}`, {
      method: 'DELETE',
      headers: headers
    })
    .then(resp => resp.json())
    .then(gigs => dispatch({type: "REMOVE_GIG_FROM_USER", payload: gig}))
  }
}

export function sendImageToController(img, id){
  return (dispatch) => {
    dispatch({type: "START_ADDING_PROFILE_PIC_TO_USER"})
    return fetch(`${ROOT_API}/add_img`, {
      method: "POST",
      body: JSON.stringify({img: img.filesUploaded[0].url}),
      headers: headers,
    })
    .then(resp => resp.json())
    .then(img => dispatch({type: "ADD_IMG_TO_USER", payload: img}))
  }
}
