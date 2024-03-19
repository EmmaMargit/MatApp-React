import React from 'react';
import styles from '../../stylesheet/Footer.module.css';

function Footer() {
    return (
      <footer className={styles.footer}>
        <h1 className={styles.h1_footer}>Nu är det slut!</h1>
        <p className={styles.author}>Gjord av Emma Brandberg</p>
      </footer>
    );
  }
  
export default Footer;