import React, {FC} from 'react';
import s from './Footer-item.module.css';


type FooterItemPropsType = {
  logo: string,
  title?: string,
  address: string
}

export const FooterItem: FC<FooterItemPropsType> = ({logo, title, address}) => {
  return (
      <div className={s.socialItem}>
        <a target='_blank' href={address} className={s.socialItemIcon}>
          <img src={logo} height="22" alt='telegramIcon'/>
        </a>
        <a target='_blank' href={address} className={s.itemLink}></a>
      </div>

  );
};