import { MENU_CHANGED } from '../actions/menu-actions';

export default function reducer(state = {
  menu: ''
},
action){
  switch (action.type) {
    case MENU_CHANGED:
      return { menu: action.payload }
    default:
     return state;
  }
}
