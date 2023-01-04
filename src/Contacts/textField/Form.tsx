import React from 'react';
import s from './Form.module.css';
import {TextField} from '@mui/material';

export const Form = () => {
  return (
    <div>
      <form className={s.contactForm}>
        <div className={s.inputBlock}>
          <div className={s.inputBlock_item}>
            <TextField
              id="standard-multiline-flexible"
              label="Your Name"
              multiline
              maxRows={4}
              variant="standard"

            />
          </div>
          <TextField
            id="standard-multiline-flexible"
            label="Your Email"
            multiline
            maxRows={4}
            variant="standard"
          />
        </div>
        <TextField
          id="outlined-multiline-flexible"
          label="Your Message"
          multiline
          rows={4}
          maxRows={4}
        />
      </form>
      <button className={s.buttonForSend}>Send Message</button>
    </div>
  );
};