import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Blackjack from './components/Blackjack'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar /> //Navbar for top of page
          <Route exact path='/' render={Home} />
          <Route exact path='/blackjack' component={Blackjack} store={this.props.store}/>
          <Route exact path='/about' render={About} />
          //Routes necessary for application
        </div>
      </Router>
    );
  }
}

export default App;
