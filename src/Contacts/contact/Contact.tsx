import React, {FC} from 'react';
import s from './Contact.module.css';


type ContactPropsType = {
  logo: string,
  title: string,
  contact:string
  address: string
}


export const Contact: FC<ContactPropsType> = ({logo, title,contact, address}) => {
  return (
    <>
      <div className={s.contact}>
        <div className={s.contactBlock}>
            <a href={address} className={s.contactIcon}>
              <img src={logo} alt=""/>
            </a>
          <div>
            <h4 className={s.contactTitle}>{title}</h4>
            <span>
              <a className={s.contactLink} href="">{contact}</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
