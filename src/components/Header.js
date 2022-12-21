import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const header = () => (
  <div className="nav-container">
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav className="navbar">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  </div>
);

export default header;
