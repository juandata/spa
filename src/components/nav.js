import React from 'react';
import '../assets/css/nav.css'

export class Nav extends React.Component{
   constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.props.onChange(e.target.id);
  }

render() {
   return this.props.menuPages.map((page,i) => {
          let hasInbox = page.inbox > 0;
          return (
           <li className="list-item"  key={i}>
             <a className="a" href= {"/" + page.title} id={page.title} onClick={this.handleClick}  >
              {page.title}
             </a>
             <span className={ hasInbox ? "badge" : '' }> { hasInbox ?' ' + page.inbox:'' } </span>
           </li>
         )
     });
  }

}
