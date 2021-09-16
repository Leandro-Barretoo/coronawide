const ADD_NORTHAMERICA = 'coronaWide/covid/ADD_NORTHAMERICA';

const initialState = [];

export const addNorthAmerica = (payload) => ({
  type: ADD_NORTHAMERICA,
  payload,
});

const northAmericaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NORTHAMERICA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default northAmericaReducer;
