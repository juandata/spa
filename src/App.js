import React, { Component } from 'react';
import {Nav} from "./components/nav";
import {Section} from "./components/section";
import './assets/css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
     this.changeName = this.changeName.bind(this);
  }
  //updates this state with onChange value inherited from nav.js
  changeName(newName) {
   this.setState({
     name: newName
   });
 }
  render() {
    return (
      <div className="App">
        <main id="main">
          <nav id="nav"><Nav name={this.state.name}onChange={this.changeName} /></nav>
          <Section navName={this.state.name}/>
        </ main>
      </div>
    );
  }
}

export default App;
