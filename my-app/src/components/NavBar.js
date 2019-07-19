import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = props => {
  // setTimeout(() => {
  //   props.history.push("/About");
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <h4 className="brand-logo">Poke'Times</h4>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
