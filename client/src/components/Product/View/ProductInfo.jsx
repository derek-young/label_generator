import React from 'react';
import productStyles from '../Product.css';

const ProductInfo = ({
  desc,
  name,
  price,
  size,
  sku,
  showBarcode,
  toggleBarcode
}) => (
  <div className={productStyles.info}>
    <div>
      <h4>Product Name</h4>
      <p>{name}</p>
    </div>
    <div>
      <h4>Product Description</h4>
      <p>{desc}</p>
    </div>
    <div>
      <h4>Price</h4>
      <p>${price.toFixed(2)}</p>
    </div>
    <div>
      <h4>Size</h4>
      <p>{size}</p>
    </div>
    <div>
      <h4>SKU</h4>
      <p>
        {sku}
      </p>
      { showBarcode ?
        <div className={productStyles.barcode} id="barcode"></div>
        :
        <p
          className={productStyles['barcode-text']}
          onClick={() => toggleBarcode.call(this, sku)}>
          View Barcode
        </p>
      }
    </div>
  </div>
);


export default ProductInfo;
