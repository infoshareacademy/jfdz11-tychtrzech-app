import React from 'react'
import { NavLink } from 'react-router-dom'
import { header as headerClass, headerNav, headerNavUlLiA, img } from './Navbar.module.css'
import Logo from '../Logo/Logo'

function Navbar() {
  // 1. stworzyc strukture
  // 2. w App.css ostylowac navbar
  // 3. wykorzystac <Link to="nazwa-sceny" /> do zmiany Route'a 
  return (
  
    <header className={headerClass}>
       <Logo/>
        
            <nav className={headerNav}>
            <NavLink className={headerNavUlLiA} exact to="/add-questions">Add Questions</NavLink>
            <NavLink className={headerNavUlLiA} exact to="/search">Search Questione</NavLink>
            <NavLink className={headerNavUlLiA} exact to="/favourite">Favourite</NavLink>
            <NavLink className={headerNavUlLiA} exact to="/stats">Stats</NavLink>
            <NavLink className={headerNavUlLiA} exact to="/best-score">Best Score</NavLink>
            </nav>
       
        
    </header>  
 
  
  
  
    )
  
}

export default Navbar