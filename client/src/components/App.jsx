import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import Login from './Login/Login';
import CreateProduct from './Product/Create/CreateProduct';
import ViewProduct from './Product/View/ViewProduct';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      displayName: null,
      selectedProduct: '2981 2837 172830',
      savedProducts: {
        '2981 2837 172830': {
          sku: '2981 2837 172830',
          name: 'Gabriella Dress',
          desc: 'The little black dress reinvented: black silk georgette is embroidered with colorful hand-sewn tassels for an update on a classic that is not to be missed. Pull-over style and adjustable shoulder straps make for easy',
          price: 995.00,
          size: 6,
          pair: null
        }
      }
    }
  }

  render() {
    const selected = this.state.savedProducts[this.state.selectedProduct];

    return (
      <div>
        <Header name={this.state.username} />
        <Route exact path="/" component={
          () => <Login signin={this.signin.bind(this)}/>
        } />
        <Route path="/admin/create" component={
          () => <CreateProduct updateProduct={this.updateProduct.bind(this)}/>
        } />
        <Route path="/admin/view" component={
          () => <ViewProduct selected={selected} products={this.state.savedProducts}/>
        } />
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
      this.getProducts.call(this);
    } else {
      console.log('Error in signin');
    }
  }

  updateProduct() {
    const name = document.querySelector('#create-product input[name="Name"]').value;
    const desc = document.querySelector('#create-product textarea[name="Desc"]').value;
    const price = document.querySelector('#create-product input[name="Price"]').value;
    const size = document.querySelector('#create-product input[name="Size"]').value;
    const sku = document.querySelector('#create-product input[name="SKU"]').value;

    const product = {
      sku,
      name,
      desc,
      price: Number(price),
      size: Number(size)
    };

    if (sku) {
      this.setState({
        selectedProduct: sku,
        savedProducts: {
          ...this.state.savedProducts,
          [sku]: product
        }
      });

      this.context.router.history.push('/admin/view');
      this.saveProduct(product);
    }
  }

  saveProduct(product) {
    axios.post('/api/product', {
      token: localStorage.token,
      product
    })
    .then(function(res) {
      if (res.status === 200) {
        console.log('Product successfully saved');
      }
    })
    .catch(function(error) {
      console.log(error, ' error saving product');
    });
  }

  getProducts() {
    const context = this;

    axios.get('/api/product', {
      params: {
        token: localStorage.token,
        username: this.state.username
      }
    })
    .then(function(res) {
      if (res.status === 200) {
        console.log(res, ' res from retrieve products');

        if (res.data.length > 0) {
          const products = {};
          for (let i = 0; i < res.data.length; i++) {
            products[res.data[i].sku] = res.data[i];
          }

          context.setState({
            selectedProduct: res.data[0].sku,
            savedProducts: products
          });
        }
      }
    })
    .catch(function(error) {
      console.log(error, ' error retrieving products');
    });
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};
