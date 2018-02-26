import { createStore } from 'redux';
import reducer from '../reducers/index.js';

const store = createStore(reducer,
window.devToolsExtension && window.devToolsExtension());
export default store;
