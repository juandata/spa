import React, { Component } from 'react';
import {Nav} from "./components/nav";
import {Section} from "./components/section";
import './assets/css/App.css';
import { menuPages } from './assets/globals';

// Redux-stuff
import { connect } from 'react-redux';
import { menuChange } from './actions/menu-actions';
import { sectionClicked } from './actions/section-actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
     this.changeName = this.changeName.bind(this);
     this.sectionClicked = this.sectionClicked.bind(this);
  }

  componentWillMount(){
    this.menuPages = menuPages;
  }

  changeName(newName) {
  this.setState({
     name: newName
   },() => {
     this.props.menuChange(this.state.name);
   });
 }

 sectionClicked(menu){
    this.props.sectionClicked(menu);
 }

  render() {
    return (
      <div className="App">
        <main id="main">
          <nav id="nav">
            <Nav menuPages={ this.menuPages } onChange={this.changeName} />
          </nav>
          <Section navName={ this.state.name } onClick={ this.sectionClicked }/>
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
  sectionClicked,
  menuChange,
 };

export default connect(mapStateToProps,mapActionToProps)(App);
