import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  SUBMIT_ANSWER_REQUEST,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_ERROR,
  INCORRECT_ANSWER,
  CORRECT_ANSWER,
  TOGGLE_WANTS_INFO,
  TOGGLE_REG_FORM,
  CLEAR_SESSION
} from '../actions/questions';

const initialState = {
  question: '',
  answer: null,
  answerResult: '',
  correctAnswer: null,
  totalQuestionsAnswered: 0,
  questionsAnsweredCorrectly: 0,
  wantsInfo: false,
  showRegForm: false,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTION_REQUEST:
    case SUBMIT_ANSWER_REQUEST:
    return {...state, answer: null, answerResult: '', correctAnswer: null, loading: true};
    case FETCH_QUESTION_SUCCESS:
    return {...state, question: action.question, loading: false};
    case FETCH_QUESTION_ERROR:
    case SUBMIT_ANSWER_ERROR:
    return {...state, error: action.error, loading: false};
    case SUBMIT_ANSWER_SUCCESS:
    return {...state, answer: action.answer, totalQuestionsAnswered: state.totalQuestionsAnswered + 1, loading: false};
    case INCORRECT_ANSWER:
    return {...state, answerResult: 'incorrect', correctAnswer: action.answer};
    case CORRECT_ANSWER:
    return {...state, answerResult: 'correct', correctAnswer: action.answer, questionsAnsweredCorrectly: state.questionsAnsweredCorrectly + 1};
    case TOGGLE_WANTS_INFO:
    return {...state, wantsInfo: !state.wantsInfo};
    case TOGGLE_REG_FORM:
    return {...state, showRegForm: !state.showRegForm};
    case CLEAR_SESSION:
    return initialState;
    default: return state;
  }
}
