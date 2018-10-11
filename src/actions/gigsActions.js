import {api} from '../services/api'
const headers = api.auth.headers
const ROOT_API = 'https://agile-tor-43621.herokuapp.com/api/v1'

export function fetchAllGigs() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_GIGS_REQUEST' });
    return fetch('https://agile-tor-43621.herokuapp.com/api/v1/gigs')
      .then(resp => resp.json())
      .then(gigs => dispatch({ type: 'FETCH_GIGS', payload: gigs }));
  };
}

export function fetchGigsForSignedInUser(){
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_GIGS_REQUEST' });
    return fetch('https://agile-tor-43621.herokuapp.com/api/v1/gigs/signedInGigs', {
      method: "POST",
      body: JSON.stringify({token: localStorage.getItem('token')}),
      headers: headers
    })
      .then(resp => resp.json())
      .then(gigs => dispatch({ type: 'FETCH_GIGS_FOR_SIGNED_IN_USER', payload: gigs }));
  };
}

export function addGigApplication(gig){
  console.log('inside handle apply gig')
  return (dispatch) => {
    dispatch({type: "START_ADDING_APPLICATION_TO_USER"})
    return fetch(`${ROOT_API}/gig_applications`, {
      method: "POST",
      body: JSON.stringify({gigId: gig.id}),
      headers: headers
    }).then(() => dispatch({type: "CREATE_GIG_APPLICATION", payload: gig}))
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

export function removeGigFromUser(gig, userId){
  // debugger
  return (dispatch) => {
    dispatch({type: "START_REMOVING_GIG_FROM_USER"})
    return fetch(`${ROOT_API}/userGig/delete`, {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify({gigId: gig.id, userId: userId})
    })
    .then(resp => resp.json())
    .then(gigs => dispatch({type: "REMOVE_GIG_FROM_USER", payload: gig}))
  }
}


export function postGig(gig){
  return (dispatch) => {
    dispatch({type: 'START_POSTING_GIG'})
    return fetch('https://agile-tor-43621.herokuapp.com/api/v1/gigs', {
      method: 'POST',
      body: JSON.stringify(gig),
      headers: headers
    }).then(resp => resp.json()).then(gigs => dispatch({type: 'FETCH_GIGS', payload: gigs}))
  }
}

export function updateGig(gig, gigId){
  return (dispatch) => {
    dispatch({type: 'START_UPDATING_GIG'})
    return fetch(`https://agile-tor-43621.herokuapp.com/api/v1/gigs/${gigId}`, {
      method: 'PATCH',
      body: JSON.stringify(gig),
      headers: headers
    }).then(resp => resp.json()).then(gigs => dispatch({type: 'UPDATE_GIG', payload: gigs}))
  }
}

export function fetchGigData(gigId){
  return (dispatch) => {
    dispatch({type: "START_FETCHING_GIG"})
    return fetch(`https://agile-tor-43621.herokuapp.com/api/v1/gigs/${gigId}`)
    .then(resp => resp.json())
    .then(gig => dispatch({type: 'FETCH_GIG', payload: gig}))
  }
}

export function handleSearchForGigs(searchInput){
  return {type: "SEARCH_FILTER", payload: searchInput}
}

export function handleSortByDate(){
  return {type: "SORT_BY_DATE"}
}

export function handleSortByVenue(){
  return {type: "SORT_BY_VENUE"}
}
