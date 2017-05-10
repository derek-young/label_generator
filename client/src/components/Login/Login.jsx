import React from 'react';
import { Link } from 'react-router-dom';
import loginStyles from './Login.css';

const Login = () => (
  <div className={loginStyles.main}>
    <div className={loginStyles.header}>
      Use your credentials to login.
    </div>
    <form className={loginStyles.form}>
      <input type="email" placeholder="Username or Email"/>
      <input type="password" placeholder="Password"/>
    </form>

    <Link className={loginStyles.login} to="admin/create">
      <button>Login</button>
    </Link>
    <a href="#">Forgot Password?</a>
  </div>
);

export default Login;
