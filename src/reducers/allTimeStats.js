import {
  FETCH_ALL_TIME_STATS_REQUEST,
  FETCH_ALL_TIME_STATS_SUCCESS,
  FETCH_ALL_TIME_STATS_ERROR,
  TOGGLE_ALL_TIME_STATS,
  CLEAR_ALL_TIME_STATS
} from '../actions/allTimeStats';

const initialState = {
  wantsAllTimeStats: false,
  allTimeAttempted: 0,
  allTimeCorrect: 0,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ALL_TIME_STATS:
    return {...state, wantsAllTimeStats: !state.wantsAllTimeStats};
    case FETCH_ALL_TIME_STATS_REQUEST:
    return {...state, loading: true};
    case FETCH_ALL_TIME_STATS_SUCCESS:
    return {...state, allTimeAttempted: action.currentUser.allTimeAttempted, allTimeCorrect: action.currentUser.allTimeCorrect, loading: false};
    case FETCH_ALL_TIME_STATS_ERROR:
    return {...state, error: action.error, loading: false};
    case CLEAR_ALL_TIME_STATS:
    return initialState;
    default: return state;
  }
}
