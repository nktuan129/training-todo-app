import { legacy_createStore as createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

// const store = configureStore({
//     reducer: rootReducer    
// });
const store = createStore(rootReducer, composedEnhancers);

export default store;