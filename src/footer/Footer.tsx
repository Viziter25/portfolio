import React from 'react';
import s from './Footer.module.css'
import styles from '../common/styles/Container.module.css'
import githubIcon from '../assets/icon/github.png'
import googleIcon from '../assets/icon/gmail.png'
import telegramIcon from '../assets/icon/telegram.png'
import instagramIcon from '../assets/icon/instagram.png'
import {FooterItem} from './footer-item/Footer-item';
import {Fade} from 'react-awesome-reveal';

type FooterItemType = {
  logo: string,
  title: string,
  address: string
}


const footerItem: FooterItemType[]  = [
  {logo: telegramIcon, title: 'Telegram', address: 'https://t.me/IlyaZlotnik'},
  {logo: instagramIcon, title: 'Instagram', address: 'https://www.instagram.com/ilya_zlot/'},
  {logo: githubIcon, title: 'GitHub', address: 'https://github.com/Viziter25'},
  {logo: googleIcon, title: 'zlotnik.ilya@gmail.com', address: 'mailto:zlotnik.ilya1994@gmail.com'},
]

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={styles.container}>
        <Fade direction="up">
        <div className={s.footerContainer}>
          <div className={s.socialBlock}>
            {footerItem.map(elem => <FooterItem logo={elem.logo} address={elem.address} title={elem.title}/>)}
            </div>
        </div>
          </Fade>
      </div>

    </div>
  );
};
