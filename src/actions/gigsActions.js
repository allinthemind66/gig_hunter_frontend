export function fetchAllGigs() {
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_GIGS_REQUEST' });
    return fetch('http://localhost:3000/api/v1/gigs')
      .then(resp => resp.json())
      .then(gigs => dispatch({ type: 'FETCH_GIGS', payload: gigs }));
  };
}
