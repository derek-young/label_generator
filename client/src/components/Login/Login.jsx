import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../App.css';
import loginStyles from './Login.css';

const Login = ({ signin }) => (
  <div className={styles.container + ' ' + loginStyles.main}>
    <div className={styles.header}>
      Use your credentials to login.
    </div>
    <form className={styles.form}>
      <input type="text" id="username" placeholder="Username or Email"/>
      <input type="password" id="password" placeholder="Password"/>

      <button type="submit" onClick={signin} className={styles.button}>
        Login
      </button>

    </form>

    <a href="#">Forgot Password?</a>
  </div>
);

export default Login;
