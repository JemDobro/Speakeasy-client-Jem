import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR
} from '../actions/questions';

const initialState = {
    questions: [],
    error: null
};

export default function reducer(state = initialState, action) {
    console.log(action);
    if (action.type === FETCH_QUESTIONS_SUCCESS) {
        console.log(action.questions);
        return Object.assign({}, state, {
            questions: action.questions,
            error: null
        });
    } else if (action.type === FETCH_QUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
