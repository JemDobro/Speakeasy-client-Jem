import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import registrationReducer from './reducers/registration';
import authReducer from './reducers/auth';
import questionsReducer from './reducers/questions';
import allTimeStatsReducer from './reducers/allTimeStats';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    form: formReducer,
    registration: registrationReducer,
    auth: authReducer,
    questions: questionsReducer,
    allTimeStats: allTimeStatsReducer
  }), composeWithDevTools(
  applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
