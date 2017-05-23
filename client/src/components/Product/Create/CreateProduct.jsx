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
      <select
        id="size"
        className="light-grey"
        onChange={() => document.getElementById('size').classList.remove("light-grey")}
        >
        <option value="null">
          Size
        </option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="00">00</option>
        <option value="0">0</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
        <option value="22">22</option>
      </select>
      <input type="text" name="Price" placeholder="Price"/>
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
