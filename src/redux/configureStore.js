import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from './covid/covid';

const rootReducer = combineReducers({
  covidReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;