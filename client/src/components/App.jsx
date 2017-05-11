import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import CreateProduct from './Product/Create/CreateProduct';
import ViewProduct from './Product/View/ViewProduct';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      displayName: null
    }
  }

  render() {
    return (
      <div>
        <Header loggedIn={this.state.username} name={this.state.username} />
        <Route exact path="/" component={
          () => <Login signin={this.signin.bind(this)}/>
        } />
        <Route path="/admin/create" component={CreateProduct} />
        <Route path="/admin/view" component={ViewProduct} />
      </div>
    );
  }

  signin(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    axios.get('/api/user', {
      params: {
        username,
        password
      }
    })
    .then(this.signinSuccess.bind(this))
    .catch(err => console.log(err));
  }

  signinSuccess(res) {
    const { username } = res.data;

    if (res.data.success) {
      this.setState({
        username
      });
      localStorage.token = res.data.token;
      this.context.router.history.push('/admin/create');
    } else {
      console.log('Error in signin');
    }
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};
