import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST
});

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS
});

export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const registrationError = (err) => ({
  type: REGISTRATION_ERROR,
  err
});

export const registerUser = user => dispatch => {
  dispatch (registrationRequest());
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(registrationSuccess());
      res.json();
      })
    .catch(err => {
      const {reason, message, location} = err;
      dispatch(registrationError(err)); 
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
            _error: 'Error submitting message'
        })
      );
    });
};
