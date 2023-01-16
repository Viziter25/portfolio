import React from 'react';
import s from './MyName.module.css'
import ReactTypingEffect from 'react-typing-effect';


export const MyName = () => {
  return (
    <div className={s.title}>
      <h5>HELLO, MY NAME IS</h5>
      <h1>Ilia Zlotnik</h1>
      <ReactTypingEffect
        speed={100}
        text={'Frontend Developer'}
      />
    </div>
  )
}
