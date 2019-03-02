import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
//const store = createStore(rootReducer, enhancer);
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const store = createStore(rootReducer, {currentVideo: null, videoList: []}, applyMiddleware(thunk));
//currentVideo: null, videoList: []

export default store;