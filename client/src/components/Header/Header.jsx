import React from 'react';
import headerStyles from './Header.css';

const Header = ({ loggedIn }) => (
  <div className={headerStyles.main}>
    {loggedIn ?
      <div className={headerStyles.menu}>
        <div>
          <img src="img/hamburger.png" />
        </div>
        <h3>Name Placeholder</h3>
      </div>
      :
      <div>
        <h3>Login</h3>
      </div>
    }
  </div>
);

export default Header;
