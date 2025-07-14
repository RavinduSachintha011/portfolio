import React from 'react'
import logo from '../../assets/logo.png';
import '../header/Header.css';

export const Header = ({ scrollToSection, refs }) => {

  return (
    <div className='header-container'>
      <div className='header'>
        <img src={logo} alt="logo" />
        <ul className='nav-links'>
          <li onClick={() => scrollToSection(refs.homeRef)}>Home</li>
          <li onClick={() => scrollToSection(refs.aboutRef)}>About</li>
          <li onClick={() => scrollToSection(refs.journeyRef)}>Journey</li>
          <li onClick={() => scrollToSection(refs.workRef)}>Projects</li>
        </ul>
        <button className='contact-btn' onClick={() => scrollToSection(refs.contactRef)}>Contact</button>
      </div>
    </div>
  )
}
