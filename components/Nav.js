import React from 'react';
import Link from 'next/link';

import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import NavStyles from '../styles/Nav.module.scss';

const Nav = ({ theme, toggleTheme }) => {
  return (
    <nav className={NavStyles.nav}>
      <div className={NavStyles.container}>
        <div className={NavStyles.logo}>
          <Link href="/">yuca creative</Link>
        </div>
        <div className={NavStyles.theme} onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </div>
        <div className={NavStyles.links}>
   
          <a title="email" href="mailto:yucacreative@gmail.com" target="_blank" rel="noreferrer">
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
