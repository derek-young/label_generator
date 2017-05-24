import React from 'react';

import styles from '../../App.css';
import productStyles from '../Product.css';

class CreateProduct extends React.Component {

  componentDidMount() {
    const { clean, selected } = this.props;

    if (!clean) {
      const { name, desc, size, price, sku } = selected;

      document.querySelector('#create-product input[name="Name"]').value = name;
      document.querySelector('#create-product textarea[name="Desc"]').value = desc;
      document.querySelector('#create-product input[name="Size"]').value = size;
      document.querySelector('#create-product input[name="Price"]').value = price;
      document.querySelector('#create-product input[name="SKU"]').value = sku;
    }
  }

  render() {
    const { updateProduct } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          Enter Product Details:
        </div>
        <form id="create-product" className={styles.form}>
          <input type="text" name="Name" placeholder="Product Name" />
          <textarea
            id={productStyles.desc}
            name="Desc"
            placeholder="Description">
          </textarea>
          <input type="text" name="Size" placeholder="Size" />
          <input type="text" name="Price" placeholder="Price" />
          <input type="text" name="SKU" placeholder="SKU" />
        </form>

        <button
          type="button"
          onClick={updateProduct}
          className={styles.button}>
          Save & Pair
        </button>
      </div>
    );
  }
}

export default CreateProduct;
