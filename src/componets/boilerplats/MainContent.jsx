import React from 'react';
import styles from '../../stylesheet/MainContent.module.css';

function MainContent ({ children }){

  return (
    <div className={styles.mainContent}>
      {/* För att visa detaljerna om maträtterna: */}
      {children}
    </div>
  );
}

export default MainContent;