import React from "react";
import "../assets/css/nav.css";
const menuPages = [
  { title: "Menu item 1", inbox: 0 },
  { title: "Menu item 2", inbox: 0 },
  { title: "Menu item 3", inbox: 0 },
  { title: "Reviews", inbox: 1138 }
];
var menu = [];

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //get current id of li and updates current active li and inactive li
  handleClick(e) {
    e.preventDefault();
    this.props.onChange(e.target.id); //updates this prop call onChange which will receive the value of e in app.js
  }

  render() {
    menu = menuPages.map(page => {
      let hasInbox = page.inbox > 0;
      return (
        <li key={page.title}>
          <a href={"#" + page.title} id={page.title} onClick={this.handleClick}>
            {page.title}
          </a>
          <span className={hasInbox ? "badge" : ""}>
            {hasInbox ? " " + page.inbox : ""}
          </span>
        </li>
      );
    });
    return menu;
  }
}
