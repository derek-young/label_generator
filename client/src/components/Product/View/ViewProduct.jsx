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
      createPairing: false,
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
    const hasPairing = selected.pair;

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
