import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../App.css';
import labelStyles from './LabelStyles.css';

const PrintableLabel = ({ selected, products, user }) => {
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
      <div className={labelStyles.tag}>
        <section>
          <span className={labelStyles.bullet}>&#8226;</span>
          <h3>Size: {size}</h3>
          <br />
          <h4>{name}</h4>
          <br />
          <p>{desc}</p>
          <br />
          <h4>${price}</h4>
          <br />
          <div>Barcode Placeholder</div>
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
          <div>Barcode Placeholder</div>
        </section>
      </div>
      <button
        className={styles.button + ' ' + labelStyles.button}
        onClick={window.print}>
        Print Tag
      </button>
    </div>
  );
};

export default PrintableLabel;
