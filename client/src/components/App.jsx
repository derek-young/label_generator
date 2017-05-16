import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import Login from './Login/Login';
import CreateProduct from './Product/Create/CreateProduct';
import ViewProduct from './Product/View/ViewProduct';
import PrintableLabel from './Product/Label/PrintableLabel';

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
          pair: null,
          img: null,
          url: null
        }
      }
    }
  }

  render() {
    const selected = this.state.savedProducts[this.state.selectedProduct];

    return (
      <div>
        <Header user={this.state.username} />
        <Route exact path="/" component={() =>
          <Login signin={this.signin.bind(this)}/>
        } />
        <Route path="/admin/create" component={() =>
          <CreateProduct updateProduct={this.updateProduct.bind(this)}/>
        } />
        <Route path="/admin/view" component={() =>
          <ViewProduct
            selected={selected}
            products={this.state.savedProducts}
            getPairing={this.getPairing.bind(this)}
          />
        } />
        <Route path="/admin/print" component={() =>
          <PrintableLabel
            user={this.state.username}
            selected={selected}
            products={this.state.savedProducts}
          />
        } />
      </div>
    );
  }

  signin(e) {
    e.preventDefault();

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
        if (res.data.length > 0) {
          const products = {};
          for (let i = 0; i < res.data.length; i++) {
            products[res.data[i].sku] = res.data[i];
          }

          context.setState({
            selectedProduct: res.data[res.data.length - 1].sku,
            savedProducts: products
          });
        }
      }
    })
    .catch(function(error) {
      console.log(error, ' error retrieving products');
    });
  }

  getPairing() {
    const context = this;
    const url = document.getElementById('pairing-url').value;

    axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => res.data)
    .then(({ product }) => {
      const {
        body_html,
        image: {
          src: img
        },
        variants: [
          {
            option1: size,
            price,
            product_id: sku
          }
        ],
        title: name
      } = product;

      const parser = new DOMParser();
      const body = parser.parseFromString(body_html, "text/html").documentElement;
      const desc = body.innerText.trim();

      const pairProduct = {
        sku,
        name,
        desc,
        price: Number(price),
        size: Number(size),
        pair: null,
        img,
        url
      };

      const selected = context.state.savedProducts[context.state.selectedProduct];
      selected.pair = sku; // Create pair association
      context.context.router.history.push('/admin/view');

      context.setState({
        savedProducts: {
          ...context.state.savedProducts,
          [sku]: pairProduct
        }
      });

    })
    .catch(function(error) {
      console.log(error, ' error retrieving HTML from pairing URL');
    });
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};
