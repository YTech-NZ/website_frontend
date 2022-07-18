import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import phLogo from '../assets/logo_rgb.png'
import '../styles/navbar.scss'

function NavBar() {
  //React Hooks: useState, useEffect, useNavigation
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    let body = document.querySelector("body");

    if (!isMenuOpen){
      //menu open so don't scroll
      body?.classList.add('no-scroll');
    } else {
      body?.classList.remove('no-scroll');
    }
    setIsMenuOpen(!isMenuOpen)
  }

  const fetchMenuClass = () => {
    return isMenuOpen ? "open" : ""
  }

  const handleFades = () => {
    return isMenuOpen ? "fade-in" : "fade-out"
  }

  const currentRoute = () => {
	switch(window.location.pathname){
		case '/about':
			return 'about_active';
		case '/events':
		  return 'events_active';
		case '/community':
		  return 'community_active';
		case '/joinus':
		  return 'joinus_active';
	  }
  }

  let navElementToHighlight = currentRoute();

  return (
    <>
      <header className={`header ${fetchMenuClass()}`}>
        <div className={`overlay ${handleFades()} has-fade`}></div>
        <nav className='grid container'>
          <div className='header__toggle hide-for-desktop' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="/" className='header__logo'>
            <img src={phLogo} alt="logo" />
          </a>
          <div className={`header__links hide-for-mobile ${navElementToHighlight}`}>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/community">Community</Link>
            <Link to="/joinus">Join Us</Link>
          </div>
        </nav>
        {/* <div className={`header__menu ${handleFades()} has-fade`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div> */}
      </header>
    </>
  );
}

export default NavBar;
