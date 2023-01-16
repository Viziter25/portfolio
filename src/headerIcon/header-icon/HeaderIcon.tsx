import React, {FC} from 'react';
import s from './HeaderIcon.module.css';


type FooterItemPropsType = {
  logo: string,
  address: string
}

export const HeaderIcon: FC<FooterItemPropsType> = ({logo, address}) => {
  return (
      <div className={s.socialItem}>
        <a target='_blank' href={address} className={s.socialItemIcon}>
          <img src={logo} height="22" alt='telegramIcon' className={s.socialImg}/>
        </a>
      </div>

  );
};