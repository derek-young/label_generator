import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../App.css';
import loginStyles from './Login.css';

const Login = () => (
  <div className={styles.container + ' ' + loginStyles.main}>
    <div className={styles.header}>
      Use your credentials to login.
    </div>
    <form className={styles.form}>
      <input type="text" name="Username" placeholder="Username or Email"/>
      <input type="password" name="Password" placeholder="Password"/>
    </form>

    <Link className={styles.link} to="/admin/create">
      <button className={styles.button}>Login</button>
    </Link>
    <a href="#">Forgot Password?</a>
  </div>
);

export default Login;
