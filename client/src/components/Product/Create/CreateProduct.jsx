import React from 'react';

import styles from '../../App.css';
import productStyles from '../Product.css';

const CreateProduct = ({ updateProduct }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      Enter Product Details:
    </div>
    <form id="create-product" className={styles.form}>
      <input type="text" name="Name" placeholder="Product Name"/>
      <textarea
        id={productStyles.desc}
        name="Desc"
        placeholder="Description">
      </textarea>
      <input type="number" name="Size" placeholder="Size"/>
      <input type="number" name="Price" placeholder="Price"/>
      <input type="text" name="SKU" placeholder="SKU"/>
    </form>

    <button
      type="button"
      onClick={updateProduct}
      className={styles.button}>
      Save & Pair
    </button>
  </div>
);
export default CreateProduct;
