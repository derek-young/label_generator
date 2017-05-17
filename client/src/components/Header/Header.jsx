import React from 'react';
import headerStyles from './Header.css';

const Header = ({ user }) => (
  <header className={headerStyles.main}>
    {user ?
      <header className={headerStyles.menu}>
        <div>
          <img src="img/hamburger.png" />
        </div>
        <h3>{user}</h3>
        <div></div>
      </header>
      :
      <header>
        <h3>Login</h3>
      </header>
    }
  </header>
);

export default Header;
