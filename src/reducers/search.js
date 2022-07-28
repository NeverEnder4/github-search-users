export const initialState = {
  query: '',
};

export const types = {
  SET_QUERY: 'SET_QUERY',
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_QUERY:
      return { ...state, query: payload.query };
    default:
      return state;
  }
};

export default searchReducer;
