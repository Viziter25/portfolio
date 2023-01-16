import React, {ChangeEvent, useState} from 'react';
import s from './Form.module.css';
import {TextField} from '@mui/material';

export const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')

  const onChangeNameHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    if(name.trim() !== '') {
      setErrorName('')
    }
  }
  const onChangeEmailHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    if(email.trim() !== '') {
      setErrorEmail('')
    }
  }

  const onBlurNameHandler = () => {
    if(name === '') {
      setErrorName('Written name')
    }
  }
const onBlurEmailHandler = () => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorEmail('Invalid email address')
    }
  }

  return (
    <div className={s.contactForm}>
      <form className={s.form}>
        <div className={s.inputBlock}>
          <div className={s.inputItem}>
            <input type="text" placeholder={'Your name'} value={name} className={s.input} onChange={onChangeNameHandler} onBlur={onBlurNameHandler}/>
            {
              errorName && <span className={s.errorText}>{errorName}</span>
            }
          </div>
          <div className={s.inputItem}>
            <input type="text" placeholder={'Your email'} value={email} className={s.input} onChange={onChangeEmailHandler} onBlur={onBlurEmailHandler}/>
            {
              errorEmail && <span className={s.errorText}>{errorEmail}</span>
            }
          </div>
        </div>
        <div className={s.textAreaBlock}>
          <textarea className={s.textArea} placeholder={'Your message'} cols={35} rows={10}/>
          <button className={s.buttonForSend}>Send Message</button>
        </div>
      </form>
    </div>
  );
};


// <div className={s.inputBlock}>
//   <div className={s.inputBlock_item}>
//     <TextField
//       id="standard-multiline-flexible"
//       label="Your Name"
//       multiline
//       maxRows={4}
//       variant="standard"
//
//     />
//   </div>
//   <TextField
//     id="standard-multiline-flexible"
//     label="Your Email"
//     multiline
//     maxRows={4}
//     variant="standard"
//   />
// </div>
// <TextField
//   id="outlined-multiline-flexible"
//   label="Your Message"
//   multiline
//   rows={4}
//   maxRows={4}
// />