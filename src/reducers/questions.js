import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    ANSWER_SUBMITTED
} from '../actions/questions';

const initialState = {
    questions: [],
    answer: null,
    totalQuestionsAnswered: 98,
    questionsAnsweredCorrectly: 33,
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
        case ANSWER_SUBMITTED:
        return {...state, answer: action.answer, totalQuestionsAnswered: state.totalQuestionsAnswered + 1, questionsAnsweredCorrectly: state.questionsAnsweredCorrectly + 1}
        default: return state;
    }
}
