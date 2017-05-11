import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../App.css';
import productStyles from '../Product.css';

const CreateProduct = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      Enter Product Details:
    </div>
    <form className={styles.form}>
      <input type="text" name="Name" placeholder="Product Name"/>
      <textarea
        id={productStyles.desc}
        name="Description"
        placeholder="Description">
      </textarea>
      <input type="number" name="Size" placeholder="Size"/>
      <input type="number" name="Price" placeholder="Price"/>
      <input type="text" name="SKU" placeholder="SKU"/>
    </form>

    <Link className={styles.link} to="/admin/view">
      <button className={styles.button}>Save & Pair</button>
    </Link>
  </div>
);
export default CreateProduct;
