import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../App.css';
import productStyles from '../Product.css';

import CreatePairing from './CreatePairing';
import ViewPairing from './ViewPairing';
import ProductInfo from './ProductInfo';

export default class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBarcode: false,
      createPairing: false
    }
  }

  render() {
    const { selected, products } = this.props;
    const hasPairing = selected.pair;

    console.log(products);

    return (
      <div className={styles.container}>
        <div className={styles.header + ' ' + productStyles.header}>
          In-Store Product Details
        </div>
        <ProductInfo
          {...selected}
          toggleBarcode={this.toggleBarcode.bind(this)}
        />

        <CreatePairing createPairing={this.createPairing.bind(this)}/>
        {/* {this.state.createPairing ?
          hasPairing ?
            <ViewPairing />
            :
            <CreatePairing />
          :
          <button
            className={styles.button}
            onClick={this.toggleCreatePairing.bind(this)}>
            Make Product Pairing
          </button>
        } */}
      </div>
    );
  }

  toggleBarcode() {
    console.log(this.state.showBarcode)
    this.setState({
      showBarcode: !this.state.showBarcode
    });
  }

  toggleCreatePairing() {
    this.setState({
      createPairing: !this.state.createPairing
    });
  }

  createPairing() {
    console.log('pairing created');
  }
}
