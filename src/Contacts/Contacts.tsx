import React from 'react';
import s from './Contacts.module.css'
import styles from '../common/styles/Container.module.css'

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={styles.container}>
        <div className={s.contactsContainer}>
          <h2 className={s.title}>Contact</h2>
          <form className={s.contactForm}>
            <input className={s.inputForName}/>
            <input className={s.inputForEmail} type="text"/>
            <textarea className={s.textArea}/>
          </form>
          <button className={s.buttonForSend}>Send Message</button>
        </div>
      </div>

    </div>
  );
};
