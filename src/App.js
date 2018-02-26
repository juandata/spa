import React, { Component } from 'react';
import {Nav} from "./components/nav";
import {Section} from "./components/section";
import './assets/css/App.css';
import { menuPages } from './assets/globals';

// Redux-stuff
import { connect } from 'react-redux';
import { menuChange } from './actions/menu-actions';
import { sectionClicked } from './actions/section-actions';
import store from './store/store';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
     this.changeName = this.changeName.bind(this);
     this.handleSectionClick = this.handleSectionClick.bind(this);
  }

  componentWillMount(){
    this.menuPages = menuPages;
  }

  //updates this state with onChange value inherited from nav.js
  changeName(newName) {
  store.dispatch(menuChange(newName));
  this.setState({
     name: newName
   });
 }

 handleSectionClick(){
   // Por algun motivo no me esta pescando el evento del click en un stateless component
   console.log("Hacoona matata");
   //store.dispatch(this.props.sectionClicked(menu););
  //  this.props.sectionClicked(this.state.name);
 }

  render() {
    return (
      <div className="App">
        <main id="main">
          <nav id="nav">
            <Nav menuPages={ this.menuPages } onChange={this.changeName} />
          </nav>
          <Section navName={ this.state.name } onClick={ this.handleSectionClick }/>
        </ main>
      </div>
    );
  }
}
// Injecta el estado (lo que devuelves de los reducers) en las props. Puede verificarlo poniendo un console.log(this.props) en el render()
const mapStateToProps = state => {
  return state;
};

const mapActionToProps = {
  sectionClicked: sectionClicked
};

export default connect(mapStateToProps,mapActionToProps)(App);
