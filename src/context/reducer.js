function reducer(state, action) {
  switch (action.type) {
    case 'Increase':
      state.counter = state.counter + 1;
      return {...state};
    case 'Decrease':
      state.counter = state.counter - 1;
      return {...state};

    default:
      return state;
  }
}
export default reducer;
