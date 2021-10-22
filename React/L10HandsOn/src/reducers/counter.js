const initialState = {
  count: 0,
  incrementCounter: 0,
  input: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        incrementCounter: state.incrementCounter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        incrementCounter: state.incrementCounter + 1
      };
    case 'ON_INPUT_CHANGE':
      return{
        ...state,
        input: action.number
      };
    case 'CHANGE_COUNT_NUMBER':
      return{
        ...state,
        count: parseInt(state.input),
        incrementCounter: 0
      };
    default:
      return state;
  }
}

export default counterReducer;