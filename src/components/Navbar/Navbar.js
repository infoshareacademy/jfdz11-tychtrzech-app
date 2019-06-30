import React from "react";
import { NavLink } from "react-router-dom";
import {
  header as headerClass,
  headerNav,
  headerNavUlLiA,
} from "./Navbar.module.css";
import Logo from "../Logo/Logo";

function Navbar(props) {
  const {login, logout} = props;
  if(!login){
    return (
        <header className={headerClass}>
          <Logo />
          <nav className={headerNav}>
            <NavLink className={headerNavUlLiA} exact to='/dashboard'>
              .
            </NavLink>
          </nav>
        </header>
    )
  }

  return (
    <header className={headerClass}>
      <Logo />
      <nav className={headerNav}>
        <NavLink className={headerNavUlLiA} exact to='/dashboard'>
          Dashboard
        </NavLink>
        <NavLink className={headerNavUlLiA} exact to='/tests'>
          Tests
        </NavLink>
        <NavLink className={headerNavUlLiA} exact to="/questions">
          Questions
        </NavLink>
        <NavLink className={headerNavUlLiA} exact to="/favourites">
          Favourites
        </NavLink>
        <NavLink className={headerNavUlLiA} exact to="/best-score">
          Best Score
        </NavLink>
        <NavLink className={headerNavUlLiA} exact to="/dashboard" onClick={logout}>
          Logout
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
