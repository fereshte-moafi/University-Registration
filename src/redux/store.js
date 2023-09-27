import {createStore ,applyMiddleware } from 'redux';
// import userReducer from './users/userReducers';
//import courseReducer from './courses/courseReducers';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

const store=createStore(rootReducer,applyMiddleware(thunk))
export default store;