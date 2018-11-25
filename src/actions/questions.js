import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { SubmissionError } from 'redux-form';

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({
  type: FETCH_QUESTIONS_REQUEST
});

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    questions
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
    type: FETCH_QUESTIONS_ERROR,
    error
});

export const SUBMIT_ANSWER_REQUEST = 'SUBMIT_ANSWER_REQUEST';
export const submitAnswerRequest = () => ({
  type: SUBMIT_ANSWER_REQUEST
});

export const SUBMIT_ANSWER_SUCCESS = 'SUBMIT_ANSWER_SUCCESS';
export const submitAnswerSuccess = questions => ({
    type: SUBMIT_ANSWER_SUCCESS,
    questions
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

export const fetchQuestions = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res) => dispatch(fetchQuestionsSuccess(res)))
        .catch(err => {
            dispatch(fetchQuestionsError(err));
        });
};

export const submitAnswer = (answer, questionId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(submitAnswerRequest());
    return fetch(`${API_BASE_URL}/questions/${questionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(answer)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(res => dispatch(submitAnswerSuccess(res)))
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
