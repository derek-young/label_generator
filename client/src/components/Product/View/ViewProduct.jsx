import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../App.css';
import productStyles from '../Product.css';

import CreatePairing from './CreatePairing';
import ViewPairing from './ViewPairing';
import ProductInfo from './ProductInfo';
import BackgroundLine from './BackgroundLine';

export default class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBarcode: false,
      createPairing: false
    }
  }

  render() {
    const { selected, products, getPairing, pairImg } = this.props;
    const pairedProduct = products[selected.pair];

    return (
      <div className={styles.container}>
        <div className={styles.header + ' ' + productStyles.header}>
          In-Store Product Details
        </div>
        <ProductInfo
          {...selected}
          toggleBarcode={this.toggleBarcode.bind(this)}
        />

        {pairedProduct ? <ViewPairing pair={pairedProduct} />
          : this.state.createPairing ?
          <CreatePairing createPairing={getPairing} />
          :
          <button
            className={styles.button}
            onClick={this.toggleCreatePairing.bind(this)}>
            Make Product Pairing
          </button>
        }

      </div>
    );
  }

  toggleBarcode() {
    this.setState({
      showBarcode: !this.state.showBarcode
    });
  }

  toggleCreatePairing() {
    this.setState({
      createPairing: !this.state.createPairing
    });
  }
}
