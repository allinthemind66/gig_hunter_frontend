export function fetchUserData(id) {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_USER_DATA_REQUEST' });
    return fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'FETCH_USER', payload: user }));
  };
}

// export function addGigToUser(gig){
//   return (dispatch) => {
//     dispatch({type: 'START_ADDING_GIG_TO_USER'})
//     return fetch("http://localhost:3000/api/v1/users/1",
//     method: 'POST',
//     body: JSON.stringify(gig),
//     headers: ({
//     'Content-Type': 'application/json'
//   }))
//   }
// }
