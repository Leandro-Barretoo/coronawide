const ADD_SOUTHAMERICA = 'coronaWide/covid/ADD_SOUTHAMERICA';

const initialState = [];

export const addSouthAmerica = (payload) => ({
  type: ADD_SOUTHAMERICA,
  payload,
});

const southAmericaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SOUTHAMERICA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default southAmericaReducer;
