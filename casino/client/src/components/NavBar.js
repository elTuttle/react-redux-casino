import React from 'react';
import { NavLink } from 'react-router-dom';

const link = { //navbar css
  height: '130px',
  width: '100px',
  padding: '10px',
  margin: '0px 3px 3px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return ( //navbar routes and css
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >Home</NavLink>

      <NavLink
      to="/blackjack"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >Blackjack</NavLink>

      <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkred'
      }}
      >About</NavLink>
    </div>
  );
};

export default NavBar;
