import React from 'react';
import styles from '../../stylesheet/MainContent.module.css';
function MainContent ({ children }){

    return (
        <div className={styles.mainContent}>
        {children}
      </div>
    );
}

export default MainContent;