const ADD_DATA = 'coronaWide/covid/ADD_DATA';

const initialState = [];

export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default covidReducer;
