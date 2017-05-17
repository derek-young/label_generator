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
      showBarcode: false,
      createPairing: false
    }
  }

  // componentDidMount() {
  //   const barcode = new Image();
  //   const canvas = ioBarcode.CODE128B(sku, {
  //     width: 1,
  //     height: 25
  //   });
  //
  //   barcode.src = canvas.toDataURL('image/png');
  //   document.getElementById('barcode').appendChild(barcode);
  // }

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
          showBarcode={this.state.showBarcode}
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

  toggleCreatePairing() {
    this.setState({
      createPairing: !this.state.createPairing
    });
  }
}
