import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ioBarcode from 'io-barcode';

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
      showBarcode: false
    }
  }

  render() {
    const {
      selected,
      products,
      editProductDetails,
      getPairing,
      removePair,
      createPairing,
      toggleCreatePairing
    } = this.props;
    const pairedProduct = products[selected.pair];

    return (
      <div className={styles.container}>
        <div className={styles.header + ' ' + productStyles.row}>
          <div className={productStyles.edit}></div>
          <div className={productStyles.header}>
            In-Store Product Details
          </div>
          <div className={productStyles.edit} onClick={editProductDetails}>
            <img src="/img/edit.png" />
          </div>
        </div>
        <ProductInfo
          {...selected}
          showBarcode={this.state.showBarcode}
          toggleBarcode={this.toggleBarcode.bind(this)}
        />

        {pairedProduct ?
          <ViewPairing
            pair={pairedProduct}
            removePair={removePair}
          />
          : createPairing ?
          <CreatePairing
            createPairing={getPairing}
          />
          :
          <button
            className={styles.button}
            onClick={toggleCreatePairing}>
            Make Product Pairing
          </button>
        }

      </div>
    );
  }

  toggleBarcode(sku) {
    this.setState({
      showBarcode: !this.state.showBarcode
    }, () => {
      const barcode = new Image();
      const canvas = ioBarcode.CODE128B(sku, {
        width: 1,
        height: 25
      });

      barcode.src = canvas.toDataURL('image/png');
      document.getElementById('barcode').appendChild(barcode);
    });
  }
}
