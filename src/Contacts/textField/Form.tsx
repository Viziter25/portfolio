import React from 'react';
import s from './Form.module.css';
import {TextField} from '@mui/material';

export const Form = () => {
  return (
    <div className={s.contactForm}>
      <form className={s.form}>
        <div className={s.inputBlock}>
          <div className={s.inputItem}>
            <input type="text" className={s.input} />
          </div>
          <div className={s.inputItem}>
            <input type="text" value={'name'} className={s.input}/>
          </div>
        </div>
        <div className={s.textAreaBlock}>
          <textarea className={s.textArea}/>
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