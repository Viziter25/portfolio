import React from 'react';
import s from './Main.module.css'
import styles from '../common/styles/Container.module.css'
import {MyName} from './myName/MyName';
import photo from '../assets/img/whV6-WJa6_U.jpg'

export const Main = () => {
  return (
    <div className={s.mainBlock}>
      <div className={styles.container}>
        <div className={s.mainContainer}>
          <MyName/>
          <div className={s.photoBlock}>
            <img src={photo} alt="myPhoto" className={s.photo}/>
          </div>
        </div>
      </div>
    </div>
  );
};
