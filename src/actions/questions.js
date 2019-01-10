import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { SubmissionError } from 'redux-form';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
    type: FETCH_QUESTION_SUCCESS,
    question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});

export const SUBMIT_ANSWER_REQUEST = 'SUBMIT_ANSWER_REQUEST';
export const submitAnswerRequest = () => ({
  type: SUBMIT_ANSWER_REQUEST
});

export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = answer => ({
    type: SUBMIT_ANSWER_SUCCESS,
    answer
});

export const SUBMIT_ANSWER_ERROR = 'SUBMIT_ANSWER_ERROR';
export const submitAnswerError = error => ({
    type: SUBMIT_ANSWER_ERROR,
    error
});

export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const incorrectAnswer = answer => ({
  type: INCORRECT_ANSWER,
  answer
});

export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const correctAnswer = answer => ({
  type: CORRECT_ANSWER,
  answer
});

export const TOGGLE_WANTS_INFO = 'TOGGLE_WANTS_INFO';
export const toggleWantsInfo = () => ({
  type: TOGGLE_WANTS_INFO
});

export const TOGGLE_REG_FORM = 'TOGGLE_REG_FORM';
export const toggleRegForm = () => ({
    type: TOGGLE_REG_FORM
});

export const CLEAR_SESSION = 'CLEAR_SESSION';
export const clearSession = () => ({
  type: CLEAR_SESSION
});

export const fetchQuestion = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchQuestionRequest());
    return fetch(`${API_BASE_URL}/users/next`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res =>res.json())
        .then((res) => dispatch(fetchQuestionSuccess(res)))
        .catch(err => {
            dispatch(fetchQuestionError(err));
        });
};

export const submitAnswer = (answer) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(submitAnswerRequest());
    return fetch(`${API_BASE_URL}/users/answer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(answer)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then((res) => {
        if (res.memoryStrength === 1) {
            dispatch(incorrectAnswer(res.answer))
        } else {
            dispatch(correctAnswer(res.answer))
        }
      })
      .then(() => dispatch(submitAnswerSuccess(answer.answer)))
      .catch(error => {
        const { reason, message, location } = error;
        dispatch(submitAnswerError(error));
        if (reason === 'ValidationError') {
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      });
  };

  export const resetSession = () => (dispatch) => {
    dispatch(clearSession());
    dispatch(fetchQuestion());
  }