const ADD_AFRICA = 'coronaWide/covid/ADD_AFRICA';

const initialState = [];

export const addAfrica = (payload) => ({
  type: ADD_AFRICA,
  payload,
});

const africaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AFRICA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default africaReducer;
