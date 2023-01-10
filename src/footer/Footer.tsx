import React from 'react';
import s from './Footer.module.css'
import styles from '../common/styles/Container.module.css'
import githubIcon from '../assets/icon/github.png'
import googleIcon from '../assets/icon/gmail.png'
import telegramIcon from '../assets/icon/telegram.png'
import instagramIcon from '../assets/icon/instagram.png'

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={styles.container}>
        <div className={s.footerContainer}>
          <div className={s.socialBlock}>

            <div className={s.socialItem}>
              <a target="_blank" href="tel:+375445863944" className={s.socialItemIcon}>
                <img src={telegramIcon} height="22" alt="telegramIcon"/>
              </a>
              <a target="_blank" href='https://t.me/IlyaZlotnik' className={s.itemLink}>Telegram</a>
            </div>
            <div className={s.socialItem}>
              <a target="_blank" href="https://www.instagram.com/ilya_zlot/" className={s.socialItemIcon}>
                <img src={instagramIcon} height="22" alt="instagramIcon"/>
              </a>
              <a target="_blank" href="https://www.instagram.com/ilya_zlot/" className={s.itemLink}>Instagram</a>
            </div>

            <div className={s.socialItem}>
              <a target="_blank" href="https://github.com/Viziter25" className={s.socialItemIcon}>
                <img src={githubIcon} height="22" alt="githubIcon"/>
              </a>
              <a target="_blank" href="https://github.com/Viziter25" className={s.itemLink}>GitHub</a>
            </div>

            <div className={s.socialItem}>
              <a target="_blank"
                 href="https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1"
                 className={s.socialItemIcon}>
                <img src={googleIcon} height="22" alt="googleIcon"/>
              </a>
              <a target="_blank"
                 href="https://myaccount.google.com/?utm_source=account-marketing-page&utm_medium=go-to-account-button&pli=1" className={s.itemLink}>zlotnik.ilya@gmail.com</a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
