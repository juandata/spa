import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';
import reducer from '../reducers/index.js';

// const middleware = applyMiddleware(promise(),thunk,logger());
const middleware = applyMiddleware();
const store = createStore(reducer,
window.devToolsExtension && window.devToolsExtension());
export default store;
