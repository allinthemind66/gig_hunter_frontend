import {api} from '../services/api'
const headers = api.auth.headers


export function fetchAllGigs() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_GIGS_REQUEST' });
    return fetch('http://localhost:3000/api/v1/gigs')
      .then(resp => resp.json())
      .then(gigs => dispatch({ type: 'FETCH_GIGS', payload: gigs }));
  };
}

export function fetchGigsForSignedInUser(){
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_GIGS_REQUEST' });
    return fetch('http://localhost:3000/api/v1/gigs/signedInGigs', {
      method: "POST",
      body: JSON.stringify({token: localStorage.getItem('token')}),
      headers: headers
    })
      .then(resp => resp.json())
      .then(gigs => dispatch({ type: 'FETCH_GIGS_FOR_SIGNED_IN_USER', payload: gigs }));
  };
}


export function postGig(gig){
  return (dispatch) => {
    dispatch({type: 'START_POSTING_GIG'})
    return fetch('http://localhost:3000/api/v1/gigs', {
      method: 'POST',
      body: JSON.stringify(gig),
      headers: headers
    }).then(resp => resp.json()).then(gigs => dispatch({type: 'FETCH_GIGS', payload: gigs}))
  }
}

export function fetchGigData(gigId){
  return (dispatch) => {
    dispatch({type: "START_FETCHING_GIG"})
    return fetch(`http://localhost:3000/api/v1/gigs/${gigId}`)
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
