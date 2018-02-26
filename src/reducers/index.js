/*const initialState = {
  angular: 0,
  react: 0,
  vuejs: 0
};*/
const menuPages = [
  { title: "Menu item 1", inbox: 0 },
  { title: "Menu item 2", inbox: 0 },
  { title: "Menu item 3", inbox: 0 },
  { title: "Reviews", inbox: 1138 }
];
var menu = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_ANGULAR":
      console.log("Your choice is Angular!");
      return Object.assign({}, state, {
        angular: state.angular + 1
      });
    case "VOTE_REACT":
      console.log("Your choice is React!");
      return Object.assign({}, state, {
        react: state.react + 1
      });
    case "VOTE_VUEJS":
      console.log("Your choice is Vue.js");
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1
      });
    default:
      return state;
  }
};
