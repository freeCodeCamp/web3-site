import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FreeCodeCampLogo from './logos/freecodecamp-logo';
import { Moon } from './moon';
import { Sun } from './sun';

import './nav.css';

const Nav = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const root = document.querySelector('#root');
    if (root) {
      root.classList.remove(theme ? 'dark-palette' : 'light-palette');
      root.classList.add(theme ? 'light-palette' : 'dark-palette');
    }
  }, [theme]);

  return (
    <header className='nav'>
      <div className='nav-section nav-left'>
        <button className='theme-toggle' onClick={() => setTheme(!theme)}>
          {theme ? <Sun /> : <Moon />}
        </button>
      </div>
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
};

export default Nav;
