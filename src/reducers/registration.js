import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR
} from '../actions/registration';

const initialState = {
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {...state, loading: true, error: null};
    case REGISTRATION_SUCCESS:
      return {...state, loading: false};
    case REGISTRATION_ERROR:
      return {...state, loading: false, error: action.err};
    default:
      return state;
  }
}