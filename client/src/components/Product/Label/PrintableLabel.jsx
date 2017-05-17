import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ioBarcode from 'io-barcode';

import styles from '../../App.css';
import labelStyles from './LabelStyles.css';

export default class PrintableLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcodeURL: ''
    };
  }

  componentDidMount() {
    const { selected: { pair, sku }, products } = this.props;
    const { url: pairURL } = products[pair];
    const barcode = new Image();
    const canvas = ioBarcode.CODE128B(sku, {
      width: 1,
      height: 25
    });

    barcode.src = canvas.toDataURL('image/png');
    document.getElementById('barcode').appendChild(barcode);

    axios.post('/api/qr', {
      url: pairURL
    })
    .then(function(res) {
      const svg = res.data;
      document.getElementById('qr-code').innerHTML = svg;
    })
    .catch(function(error) {
      console.log(error, ' error generating QR code');
    });
  }

  render() {
    const { selected, products, user } = this.props;
    const { name, desc, size, price, pair } = selected;
    const {
      name: pairName,
      desc: pairDesc,
      img: pairImg
    } = products[pair];

    return (
      <div className={styles.container}>
        <Link className={labelStyles.back} to="/admin/view">
          <div>
            &#8592; Back
          </div>
        </Link>

        <div className={styles.header + ' header ' + labelStyles.header}>
          Product Tag
        </div>
        <div className={labelStyles.tag} id="tag">
          <section>
            <span className={labelStyles.bullet}>&#8226;</span>
            <h3>Size: {size}</h3>
            <br />
            <h4>{name}</h4>
            <br />
            <p>{desc}</p>
            <br />
            <h4>${price}</h4>
            <div id="barcode"></div>
          </section>
          <section>
            <h4>
              <span className={labelStyles.light}>
                {user}
              </span>
            </h4>
            <p>Recommended pairing</p>
            <img src={pairImg} />
            <h4>{pairName}</h4>
            <br />
            <br />
            <p>{pairDesc}</p>
            <br />
            <br />
            <p>
              <span className={labelStyles.dark}>
                Paired Product:
              </span>
            </p>
            <br />
            <div id="qr-code" className={labelStyles['qr-code']}></div>
          </section>
        </div>
        <button
          className={styles.button + ' ' + labelStyles.button}
          onClick={window.print}>
          Print Tag
        </button>
      </div>
    );
  }
};
