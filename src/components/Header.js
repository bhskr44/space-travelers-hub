import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';


const header = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="navbar">
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </div>
  );
};

export default header;
