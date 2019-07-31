// The initial state of the App
export const initialState = {
  userData: {
    givenName: 'Infant Reni',
    familyName: 'Xavier'
  }
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
