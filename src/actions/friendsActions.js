import {api} from '../services/api'
// const headers = api.auth.headers
let token = localStorage.getItem('token')
const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
}
const ROOT_API = 'https://agile-tor-43621.herokuapp.com/api/v1'

export function createFriendRequest(friendId) {
  return (dispatch) => {
    dispatch({ type: 'START_CREATING_FRIEND_REQUEST' });
    debugger
    return fetch(`${ROOT_API}/friend_requests`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({friendId: friendId})
    })
      // .then(resp => resp.json())
      // .then(gigs => dispatch({ type: 'CREATE_FRIEND_REQUEST', payload: friends }));
  };
}
