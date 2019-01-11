import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  TOGGLE_LOGGED_OUT
} from '../actions/auth';

const initialState = {
  authToken: null, 
  currentUser: null,
  loggedOut: false,
  loading: false,
  error: null
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN:
    return {...state, authToken: action.authToken};
    case CLEAR_AUTH:
    return {...state, authToken: null, currentUser: null };
    case AUTH_REQUEST:
    return {...state, loggedOut: false, loading: true, error: null };
    case AUTH_SUCCESS:
    return {...state, loading: false, currentUser: {firstName: action.currentUser.firstName}};
    case AUTH_ERROR:
    return {...state, loading: false, error: action.error};
    case TOGGLE_LOGGED_OUT:
    return {...state,  loggedOut: !state.loggedOut};
    default: return state;
  }
}



 
  

