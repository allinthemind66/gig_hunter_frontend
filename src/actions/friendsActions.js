import {api} from '../services/api'
const headers = api.auth.headers
const ROOT_API = 'http://localhost:3000/api/v1'

export function createFriendRequest(friendId) {
  return (dispatch) => {
    dispatch({ type: 'START_CREATING_FRIEND_REQUEST' });
    return fetch(`${ROOT_API}/friend_requests`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({friendId: friendId})
    })
      // .then(resp => resp.json())
      // .then(gigs => dispatch({ type: 'CREATE_FRIEND_REQUEST', payload: friends }));
  };
}
