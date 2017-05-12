import React from 'react';

import styles from '../../App.css';
import productStyles from '../Product.css';

const CreatePairing = ({ createPairing }) => (
  <div className={productStyles.main}>
    <div className={productStyles['background-line']}>
      <span>Pair With</span>
    </div>
    <div>
      Online Product Location:
    </div>
    <form className={styles.form}>
      <input
        id="pairing-url"
        type="url"
        placeholder="Paste URL"
      />
    </form>
    <button
      className={styles.button}
      onClick={createPairing}>
      View Pairing
    </button>
  </div>
);


export default CreatePairing;
