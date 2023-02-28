import React, {ChangeEvent, useState} from 'react';
import s from './Form.module.css';
import {Button, FormControl, FormGroup, Input, TextField} from '@mui/material';
import emailjs from '@emailjs/browser';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')

  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    if (name.trim() !== '') {
      setErrorName('')
    }
  }
  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    if (email.trim() !== '') {
      setErrorEmail('')
    }
  }

  const onBlurNameHandler = () => {
    if (name === '') {
      setErrorName('Written name')
    }
  }
  const onBlurEmailHandler = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorEmail('Invalid email address')
    }
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, 'Max length 50 symbols').required('name required'),
      email: Yup.string().email('Invalid email address').required('email required'),
      message: Yup.string().max(1000, 'Max length 1000 symbols').required('message required')
    }),
    onSubmit: (values) => {
      emailjs.send('service_t3ap9su', 'template_k0xpchf', values, 'sk98Ugq-AR7qUAZFO')
        .then(res => {
          formik.resetForm()
          alert('successes')
        })

    }
  })

  return (
    <div className={s.contactForm}>
      {/*<form className={s.form}>*/}
      {/*  <div className={s.inputBlock}>*/}
      {/*    <div className={s.inputItem}>*/}
      {/*      <input type="text" placeholder={'Your name'} value={name} className={s.input} onChange={onChangeNameHandler}*/}
      {/*             onBlur={onBlurNameHandler}/>*/}
      {/*      {*/}
      {/*        errorName && <span className={s.errorText}>{errorName}</span>*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*    <div className={s.inputItem}>*/}
      {/*      <input type="text" placeholder={'Your email'} value={email} className={s.input}*/}
      {/*             onChange={onChangeEmailHandler} onBlur={onBlurEmailHandler}/>*/}
      {/*      {*/}
      {/*        errorEmail && <span className={s.errorText}>{errorEmail}</span>*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={s.textAreaBlock}>*/}
      {/*    <textarea className={s.textArea} placeholder={'Your message'} cols={35} rows={10}/>*/}
      {/*    <button className={s.buttonForSend}>Send Message</button>*/}
      {/*  </div>*/}
      {/*</form>*/}






      <form className={s.form}>
        <div className={s.inputBlock}>
          <div className={s.inputItem}>
            <TextField label="Your name"
                       margin="normal"
                       variant="standard"
                       {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
          </div>
          <div className={s.inputItem}>
            <TextField label="Your email"
                       margin="normal"
                       variant="standard"
                       {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
          </div>
        </div>
        <div className={s.textAreaBlock}>
          <TextField
            id="outlined-multiline-static"
            label="Your message"
            multiline
            rows={4}
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div>}
          <button className={s.buttonForSend}  type={'submit'}>Send Message</button>
        </div>
      </form>
    </div>
  );
};
