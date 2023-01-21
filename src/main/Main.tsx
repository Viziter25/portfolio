import React from 'react';
import s from './Main.module.css'
import styles from '../common/styles/Container.module.css'
import {MyName} from './myName/MyName';
import photo from '../assets/img/whV6-WJa6_U.jpg'
// import {Particle} from './particles/Particle';
import {Fade} from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';



export const Main = () => {
  return (
    <div className={s.mainBlock} id='main'>
      <div className={styles.container}>
        {/*<Particle />*/}
        <div className={s.mainContainer}>
          <Fade direction="left">
            <MyName/>
          </Fade>
          <div className={s.photoBlock}>
            <Fade direction="right" duration={2000}>
              <Tilt className="Tilt" >
                <img src={photo} alt="myPhoto" className={s.photo}/>
              </Tilt>
            </Fade>
          </div>

        </div>
      </div>

    </div>
  );
};
