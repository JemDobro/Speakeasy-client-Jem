import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_ALL_TIME_STATS_REQUEST = 'FETCH_ALL_TIME_STATS_REQUEST';
export const fetchAllTimeStatsRequest = () => ({
  type: FETCH_ALL_TIME_STATS_REQUEST
});

export const FETCH_ALL_TIME_STATS_SUCCESS = 'FETCH_ALL_TIME_STATS_SUCCESS';
export const fetchAllTimeStatsSuccess = currentUser => ({
    type: FETCH_ALL_TIME_STATS_SUCCESS,
    currentUser
});

export const FETCH_ALL_TIME_STATS_ERROR = 'FETCH_ALL_TIME_STATS_ERROR';
export const fetchAllTimeStatsError = error => ({
    type: FETCH_ALL_TIME_STATS_ERROR,
    error
});

export const TOGGLE_ALL_TIME_STATS = 'TOGGLE_ALL_TIME_STATS';
export const toggleAllTimeStats = () => ({
  type: TOGGLE_ALL_TIME_STATS
});

export const CLEAR_ALL_TIME_STATS = 'CLEAR_ALL_TIME_STATS';
export const clearAllTimeStats = () => ({
  type: CLEAR_ALL_TIME_STATS
});

export const fetchAllTimeStats = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchAllTimeStatsRequest());
  return fetch(`${API_BASE_URL}/users/stats`, {
      method: 'GET',
      headers: {
          Authorization: `Bearer ${authToken}`
      }
  })
      .then(res => normalizeResponseErrors(res))
      .then(res =>res.json())
      .then((res) => dispatch(fetchAllTimeStatsSuccess(res)))
      .catch(err => {
          dispatch(fetchAllTimeStatsError(err));
      });
};