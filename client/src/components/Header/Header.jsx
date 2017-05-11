import React from 'react';
import headerStyles from './Header.css';

const Header = ({ loggedIn, name }) => (
  <div className={headerStyles.main}>
    {loggedIn ?
      <div className={headerStyles.menu}>
        <div>
          <img src="img/hamburger.png" />
        </div>
        <h3>{name}</h3>
        <div></div>
      </div>
      :
      <div>
        <h3>Login</h3>
      </div>
    }
  </div>
);

export default Header;
