import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//This is the variable we want to modify upon action
const initialState = {
    count: 0
};

//The reducer is going to handle the actions based on the type
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_ONE':
        return {
            count: state.count + 1
        };
        case 'DECREMENT_ONE':
        return {
            count: state.count - 1
        };
        case 'INCREMENT_FIVE':
            return {
                count: state.count + 5
            };
            case 'DECREMENT_TEN':
            return {
                count: state.count - 10
            };
        case 'RESET':
        return {
            count: 0
        };
        default:
            return state;
    }
}

//Create the store and pass the reducer to the store
const store = createStore(reducer);

//Pass the store to the provider
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));
