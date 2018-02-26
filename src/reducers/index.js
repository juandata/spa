import { combineReducers } from 'redux';
import menus from './menus-reducer';
import section from './section-reducer';

export default combineReducers({
  menus,
  section
})
