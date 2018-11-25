import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SUBMIT_ANSWER_REQUEST,
    SUBMIT_ANSWER_SUCCESS,
    SUBMIT_ANSWER_ERROR,
    INCORRECT_ANSWER,
    CORRECT_ANSWER
} from '../actions/questions';

const initialState = {
    questions: [],
    answer: null,
    answerResult: '',
    correctAnswer: null,
    totalQuestionsAnswered: 0,
    questionsAnsweredCorrectly: 0,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
        return {...state, loading: true};
        case FETCH_QUESTIONS_SUCCESS:
        return {...state, questions: action.questions};
        case FETCH_QUESTIONS_ERROR:
        return {...state, error: action.error};
        case SUBMIT_ANSWER_REQUEST:
        return {...state, loading: true};
        case SUBMIT_ANSWER_SUCCESS:
        return {...state, answer: action.answer, totalQuestionsAnswered: state.totalQuestionsAnswered + 1};
        case SUBMIT_ANSWER_ERROR:
        return {...state, error: action.error};
        case INCORRECT_ANSWER:
        return {...state, answerResult: 'incorrect', correctAnswer: action.answer};
        case CORRECT_ANSWER:
        return {...state, answerResult: 'correct', correctAnswer: action.answer,questionsAnsweredCorrectly: state.questionsAnsweredCorrectly + 1};
        default: return state;
    }
}
