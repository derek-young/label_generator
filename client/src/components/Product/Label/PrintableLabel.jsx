import React from 'react';

import styles from '../../App.css';
import labelStyles from './LabelStyles.css';

const PrintableLabel = ({ selected, products }) => {
  const pairedProduct = products[selected.pair];

  return (
    <div className={styles.container}>
      <div className={styles.header + ' ' + labelStyles.header}>
        Product Tag
      </div>
      <div className={labelStyles.tag}>

      </div>
    </div>
  );
};

export default PrintableLabel;
