import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.css'
import {TitleContact} from './title/TitleContact';
import {Contact} from './contact/Contact';
import phoneIcon from './../assets/icon/call.png'
import emailIcon from './../assets/icon/email.png'
import telegramIcon from './../assets/icon/telegram.png'
import {Form} from './textField/Form';
import {Fade} from 'react-awesome-reveal';


type ContactType = {
  logo: string,
  title: string,
  contact: string
  address: string
}


export const Contacts = () => {


  const contact: ContactType[] = [
    {logo: phoneIcon, title: 'Phone', contact: '+37544586394', address: 'tel:+375445863944'},
    {
      logo: emailIcon,
      title: 'Email',
      contact: 'zlotnik.ilya1994@gmail.com',
      address: 'mailto:zlotnik.ilya1994@gmail.com'
    },
    {logo: telegramIcon, title: 'Telegram', contact: 'Ilya Zlotnik', address: 'https://t.me/IlyaZlotnik'},
  ]


  return (
    <div className={s.contacts} id='contacts'>
      <div className={styles.container}>
        <div className={s.contactsContainer}>

          <div className={s.contactsItem}>
            <div className={s.contactsBlock}>
              <TitleContact title={'LET\'S GET IN TOUCH'}/>
              <div>
                <p className={s.text}>There are many variations of pssges of Lorem Ipsum available, bu in some form,
                  by</p>
              </div>
            </div>
            <Fade direction="left">
              {contact.map(elem => <Contact key={elem.title} title={elem.title} contact={elem.contact} logo={elem.logo}
                                            address={elem.address}/>)}
            </Fade>
          </div>
          <Fade direction="right">
            <Form/>
          </Fade>
        </div>
      </div>

    </div>
  );
};
