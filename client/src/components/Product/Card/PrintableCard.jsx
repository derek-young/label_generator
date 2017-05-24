import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../App.css';
import cardStyles from './CardStyles.css';

const PrintableCard = ({ selected, paired, user }) => {
  const { name, price } = selected;
  let { url: pairURL } = paired;
  if (pairURL.indexOf('://') >= 0) {
    pairURL = pairURL.substring(pairURL.indexOf('://') + 3, pairURL.length);
  }

  return (
    <div className={styles.container}>
      <Link className={styles.back} to="/admin/view">
        <div>
          &#8592; Back
        </div>
      </Link>

      <div className={styles.header}>
        Business Card
      </div>
      <div className={cardStyles.card} id="card">
        <section className={cardStyles.front}>
          <div></div>
          <div className={cardStyles.column}>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <div>
            <h4>{user}</h4>
          </div>
        </section>
        <section className={cardStyles['back-outer']}>
          <div className={cardStyles['back-inner']}>
            <div>
              <p>Unlock your personal recommendation</p>
              <h3>{pairURL}</h3>
            </div>
          </div>
        </section>
      </div>
      <button
        className={styles.button + ' ' + cardStyles.button}
        onClick={window.print}>
        Print Business Card
      </button>
    </div>
  );
}


export default PrintableCard;
