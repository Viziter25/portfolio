import React from 'react';
import s from './HeaderIcons.module.css'
import githubIcon from '../assets/icon/github (1).png'
import googleIcon from '../assets/icon/mail.png'
import telegramIcon from '../assets/icon/telegram-icon.png'
import linkedinIcon from '../assets/icon/linkedin-logo.png'
import codewars from '../assets/icon/codewars.svg'
import {HeaderIcon} from './header-icon/HeaderIcon'


type FooterItemType = {
  logo: string,
  address: string
}


const footerItem: FooterItemType[]  = [
  {logo: telegramIcon, address: 'https://t.me/IlyaZlotnik'},
  {logo: linkedinIcon, address: 'https://www.linkedin.com/in/ilya-zlotnik-a08197b0/'},
  {logo: githubIcon, address: 'https://github.com/Viziter25'},
  {logo: googleIcon, address: 'mailto:zlotnik.ilya1994@gmail.com'},
  {logo: codewars, address: 'https://www.codewars.com/users/Viziter'},
]

export const HeaderIcons = () => {
  return (
    <div className={s.footer}>

        <div className={s.footerContainer}>
          <div className={s.socialBlock}>
            {footerItem.map((elem,i) => <HeaderIcon key={i} logo={elem.logo} address={elem.address}/>)}
            </div>
        </div>

    </div>
  );
};
