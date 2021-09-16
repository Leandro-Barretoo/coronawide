import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import europeReducer, { addEurope, addEuropeRegions } from './covid/europe';
import africaReducer, { addAfrica } from './covid/africa';
import asiaReducer, { addAsia } from './covid/asia';
import northAmericaReducer, { addNorthAmerica } from './covid/northAmerica';
import southAmericaReducer, { addSouthAmerica } from './covid/southAmerica';
import europeArr from '../countriesArrays/europeArr';
import africaArr from '../countriesArrays/africaArr';
import asiaArr from '../countriesArrays/asiaArr';
import northAmericaArr from '../countriesArrays/northAmericaArr';
import southAmericaArr from '../countriesArrays/southAmericaArr';

const rootReducer = combineReducers({
  europeReducer,
  africaReducer,
  asiaReducer,
  northAmericaReducer,
  southAmericaReducer,
});

// get contries

const getCountries = () => (dispatch) => {
  fetch('https://api.covid19tracking.narrativa.com/api/countries')
    .then((response) => response.json())
    .then((data) => data.countries.forEach((country) => {
      if (europeArr.includes(country.id)) {
        dispatch(addEurope(country));
      } else if (africaArr.includes(country.id)) {
        dispatch(addAfrica(country));
      } else if (asiaArr.includes(country.id)) {
        dispatch(addAsia(country));
      } else if (northAmericaArr.includes(country.id)) {
        dispatch(addNorthAmerica(country));
      } else if (southAmericaArr.includes(country.id)) {
        dispatch(addSouthAmerica(country));
      }
    }));
};

// get regions

const getRegions = () => (dispatch) => {
  fetch('https://api.covid19tracking.narrativa.com/api/countries/portugal/regions')
    .then((response) => response.json())
    .then((data) => data.countries.forEach((region) => {
      dispatch(addEuropeRegions('portugal', region));
    }));
};

const generateStore = () => (dispatch) => {
  dispatch(getCountries());
  dispatch(getRegions());
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

store.dispatch(generateStore());

window.store = store;

export default store;
