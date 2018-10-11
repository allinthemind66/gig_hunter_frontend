// import {api} from '../services/api'
const ROOT_API = 'https://agile-tor-43621.herokuapp.com/api/v1'
let token = localStorage.getItem('token')
let id = localStorage.getItem('id')
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

export function fetchUserFriendRequests(){
  return (dispatch) => {
    dispatch({type: "START_FETCHING_USER_FRIEND_REQUESTS"});
    return fetch(`${ROOT_API}/friend_requests`, {
      headers: headers
    })
    .then(resp => resp.json())
    .then(requests => dispatch({type: "GET_FRIEND_REQUESTS", payload: requests}))
  }
}

export function acceptFriendRequest(user){
  return (dispatch) => {
    dispatch({type: "START_ACCEPTING_FRIEND_REQUEST"});
    return fetch(`${ROOT_API}/friendships`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(friend => dispatch({type: "ACCEPT_FRIEND_REQUEST", payload: friend }))
  }
}

export function fetchUserFriends(){
  return (dispatch) => {
    dispatch({type: "START_FETCHING_USER_FRIENDS"})
    return fetch(`${ROOT_API}/friendships`,{
      method: "GET",
      headers: headers
    })
    .then(resp => resp.json())
    .then(friends => dispatch({type: "FETCH_USER_FRIENDS", payload: friends}))
  }
}

// export function addGigToUser(gig){
//   debugger
//   return (dispatch) => {
//     dispatch({type: 'START_ADDING_GIG_TO_USER'})
//     return fetch(`${ROOT_API}/user_gigs/`,{
//       method: 'POST',
//       body: JSON.stringify(gig),
//       headers: headers
//     })
//     .then(resp => resp.json())
//     .then(json => dispatch({type: 'ADD_GIG_TO_USER', payload: gig}))
//   }
// }

// export function removeGigFromUser(gig){
//   // debugger
//   return (dispatch) => {
//     dispatch({type: "START_REMOVING_GIG_FROM_USER"})
//     return fetch(`${ROOT_API}/userGig/delete`, {
//       method: 'DELETE',
//       headers: headers,
//       body: JSON.stringify({gigId: gig.id})
//     })
//     .then(resp => resp.json())
//     .then(gigs => dispatch({type: "REMOVE_GIG_FROM_USER", payload: gig}))
//   }
// }

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

// export function addGigApplication(gig){
//   console.log('inside handle apply gig')
//   return (dispatch) => {
//     dispatch({type: "START_ADDING_APPLICATION_TO_USER"})
//     return fetch(`${ROOT_API}/gig_applications`, {
//       method: "POST",
//       body: JSON.stringify({gigId: gig.id}),
//       headers: headers
//     })
//   }
// }

export function fetchUserPostedGigs(){
  return (dispatch) => {
    dispatch({type: "START_GETTING_USERS_POSTED_GIGS"})
    return fetch(`${ROOT_API}/gigs`)
    .then(resp => resp.json())
    .then(gigs => dispatch({type: "ADD_USERS_POSTED_GIGS_TO_USER", payload: gigs}))
  }
}

export function getAllUsers(){
  return (dispatch) => {
    dispatch({type: "START_GETTING_ALL_USERS"})
    return fetch(`${ROOT_API}/users`)
    .then(resp => resp.json())
    .then(json => dispatch({type: "GET_ALL_USERS", payload: json}))
  }
}

export function handleSearchForUsers(searchInput){
  debugger
  return {type: "SEARCH_FILTER_FOR_ALL_USERS", payload: searchInput}
}

export function updateUserProfile(data){
  return (dispatch) => {
    dispatch({type: "START_UPDATING_USER_PROFILE"})
    return fetch(`${ROOT_API}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({data}),
      headers: headers
    }).then(resp => resp.json())
    .then(json => dispatch({type: "UPDATE_USER_PROFILE", payload: json}))
  }
}
