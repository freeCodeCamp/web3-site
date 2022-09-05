import React from 'react';
import { Link } from 'react-router-dom';
import FreeCodeCampLogo from './logos/freecodecamp-logo.js';

import './nav.css';

const Nav = () => (
  <header className='nav'>
    <div className='nav-section nav-left'></div>
    <div className='nav-section nav-middle'>
      <Link to='/'>
        <FreeCodeCampLogo />
      </Link>
    </div>
    <div className='nav-section nav-right'>
      {' '}
      <a
        className='btn-donate'
        rel='noopener noreferrer'
        target='_blank'
        href='https://www.freecodecamp.org/donate'
      >
        Donate
      </a>
    </div>
  </header>
);

export default Nav;
