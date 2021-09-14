import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import europeReducer from './covid/europe';
import africaReducer from './covid/africa';
import asiaReducer from './covid/asia';
import northAmericaReducer from './covid/northAmerica';
import southAmericaReducer from './covid/southAmerica';

const rootReducer = combineReducers({
  europeReducer,
  africaReducer,
  asiaReducer,
  northAmericaReducer,
  southAmericaReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

window.store = store;

export default store;
