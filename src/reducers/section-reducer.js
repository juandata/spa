import { SECTION_CLICKED } from '../actions/section-actions';

export default function reducer(state = {
  whenInMenu: ''
},
action){
  switch (action.type) {
    case SECTION_CLICKED:
      return { whenInMenu: action.payload }
    default:
     return state;
  }
}
