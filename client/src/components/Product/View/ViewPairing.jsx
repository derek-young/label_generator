import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../App.css';
import productStyles from '../Product.css';

const ViewPairing = ({ pair }) => {
  const { name, desc, img } = pair;

  return (
    <div className={productStyles.main}>
      <div className={productStyles['background-line']}>
        <span>Pair With</span>
      </div>
      <div className={productStyles.header}>
        Paired Product
      </div>
      <div className={productStyles['pair-image']}>
        <div>
          <img src={img} />
        </div>
      </div>
      <div className={productStyles.info}>
        <div>
          <h4>Product Name</h4>
          <p>{name}</p>
        </div>
        <div>
          <h4>Product Description</h4>
          <p>{desc}</p>
        </div>
      </div>
      <Link to="/admin/print">
        <button className={styles.button}>
          Generate Clothing Tag
        </button>
      </Link>
    </div>
  );
};


export default ViewPairing;
