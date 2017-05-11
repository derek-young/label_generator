import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import CreateProduct from './Product/Create/CreateProduct';
import ViewProduct from './Product/View/ViewProduct';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: {
        loggedIn: true,
        username: null,
        displayName: null
      }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header loggedIn={this.state.auth.loggedIn} />
          <Route exact path="/" component={Login} />
          <Route path="/admin/create" component={CreateProduct} />
          <Route path="/admin/view" component={ViewProduct} />
        </div>
      </Router>
    );
  }
}
