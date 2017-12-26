import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' render={Home} />
          <Route exact path='/actors' render={Blackjack} />
          <Route exact path='/movies' render={About} />
        </div>
      </Router>
    );
  }
}

export default App;
