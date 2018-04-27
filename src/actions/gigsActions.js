export function fetchAllGigs() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_GIGS_REQUEST' });
    return fetch('http://localhost:3000/api/v1/gigs')
      .then(resp => resp.json())
      .then(gigs => dispatch({ type: 'FETCH_GIGS', payload: gigs }));
  };
}

// export function addGigToUser(gig){
//   debugger
//   return (dispatch) => {
//     dispatch({type: "START_POSTING_GIG_TO_USER"});
//     return fetch('http://localhost:3000/api/v1/user')
//
//   }
// }


export function postGig(gig){
  return (dispatch) => {
    dispatch({type: 'START_POSTING_GIG'})
    return fetch('http://localhost:3000/api/v1/gigs', {
      method: 'POST',
      body: JSON.stringify(gig),
      headers: ({
        'Content-Type': 'application/json'
      })
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
