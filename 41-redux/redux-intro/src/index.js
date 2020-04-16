import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'; 
import { reducer } from './reducer';

let store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// PART TWO ---- PLAIN OLD REDUX
// console.log(store)

// console.log('store state:::::: ', store.getState())

// store.dispatch({type: 'LIKE'})

// console.log('store state:::::: ', store.getState())

// store.dispatch({ type: 'HANDLE_CHANGE', payload: {text: 'do you remember september?'}})

// console.log('LAST BUT NOT LEAST', store.getState())

// store methods
// 1. dispatch
// 2. getState