import React from 'react';
import s from './Main.module.css'
import styles from '../common/styles/Container.module.css'

export const Main = () => {
  return (
    <div className={s.mainBlock}>
      <div className={styles.container}>
        <div className={s.mainContainer}>
          <div className={s.text}>
            <span>Hi There</span>
            <h1>I'am Ilia Zlotnik</h1>
            <p>Frontend Developer</p>
          </div>
          <div className={s.photo}></div>
        </div>
      </div>


    </div>
  );
};
