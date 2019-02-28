import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// export default function newStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk)
//   )
// }

const store = createStore(rootReducer, {currentVideo: null, videoList: []}, applyMiddleware(thunk))

export default store

//Pass the root reducer into createStore to define the store object which contains a Redux state.
//const store = createStore(rootReducer,initialState,applyMiddleware(thunk));
//{currentVideo: , videoList:}