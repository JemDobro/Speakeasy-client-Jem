import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SUBMIT_ANSWER_REQUEST,
    SUBMIT_ANSWER_SUCCESS,
    SUBMIT_ANSWER_ERROR,
    INCORRECT_ANSWER,
    CORRECT_ANSWER,
    NEXT_QUESTION
} from '../actions/questions';

const initialState = {
    questions: [],
    currQuestionIndex: 0,
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
        case SUBMIT_ANSWER_REQUEST:
        return {...state, loading: true};
        case FETCH_QUESTIONS_SUCCESS:
        return {...state, questions: action.questions, loading: false};
        case FETCH_QUESTIONS_ERROR:
        case SUBMIT_ANSWER_ERROR:
        return {...state, error: action.error, loading: false};
        case SUBMIT_ANSWER_SUCCESS:
        return {...state, answer: action.answer, totalQuestionsAnswered: state.totalQuestionsAnswered + 1, loading: false};
        case INCORRECT_ANSWER:
        return {...state, answerResult: 'incorrect', correctAnswer: action.answer};
        case CORRECT_ANSWER:
        return {...state, answerResult: 'correct', correctAnswer: action.answer, questionsAnsweredCorrectly: state.questionsAnsweredCorrectly + 1}; 
        case NEXT_QUESTION:
        return {...state, currQuestionIndex: state.currQuestionIndex + 1, answer: null, answerResult: '', correctAnswer: null}
        default: return state;
    }
}
