export default function usersReducer(state = {
  loading: false,
  userImg: '',
  userData: {},
  userGigs: [],
  userPostedGigs: [],
  allUsers: [],
  filteredUsers: [],
  friendRequests: [],
  friends: []
}, action){

  switch(action.type){
    case 'START_FETCHING_USER_DATA_REQUEST':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_USER':
      return Object.assign({}, state, {loading: false, userData: action.payload, userGigs: action.payload.gigs})
    case('START_FETCHING_USER_FRIEND_REQUESTS'):
      return {...state, loading: true}
    case('GET_FRIEND_REQUESTS'):
      return {...state, loading: false, friendRequests: action.payload}
    case "START_ADDING_GIG_TO_USER":
      return {...state, loading: true}
    case("START_ACCEPTING_FRIEND_REQUEST"):
      return {...state, loading: true}
    case("ACCEPT_FRIEND_REQUEST"):
    debugger
      return {...state, loading: false, friends: [...state.friends, action.payload]}
    case("START_FETCHING_USER_FRIENDS"):
      return {...state, loading: true}
    case("FETCH_USER_FRIENDS"):
      return {...state, loading: false, friends: action.payload}
    case "START_REMOVING_GIG_FROM_USER":
      return {...state, loading: true}
    case "REMOVE_GIG_FROM_USER":
    let filtered = state.userGigs.filter(gig => gig.id !== action.payload.id)
      return {...state, loading: false, userGigs: filtered}
    case "START_ADDING_PROFILE_PIC_TO_USER":
      return {...state, loading:true}
    case "ADD_IMG_TO_USER":
      return {...state, userData: action.payload, loading: false}
    case("START_GETTING_USERS_POSTED_GIGS"):
      return {...state, loading: true}
    case("ADD_USERS_POSTED_GIGS_TO_USER"):
      let usersGigs = action.payload.filter(gig => gig.user_id == localStorage.id)
      return {...state, loading: false, userPostedGigs: usersGigs}
    case("START_GETTING_ALL_USERS"):
      return {...state, loading: true}
    case("GET_ALL_USERS"):
      return {...state, allUsers: action.payload, filteredUsers: action.payload,loading: false}
    case("SEARCH_FILTER_FOR_ALL_USERS"):
      return {...state, filteredUsers: state.allUsers.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase()))}
    case("START_UPDATING_USER_PROFILE"):
      return {...state, loading: true}
    case("UPDATE_USER_PROFILE"):
      return state
    default:
      return state
  }
}
