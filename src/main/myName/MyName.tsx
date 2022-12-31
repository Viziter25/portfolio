import React from 'react';
import s from './MyName.module.css'

export const MyName = () => {
  return (
    <div className={s.title}>
      <h5>HELLO, MY NAME IS</h5>
      <h1>Ilia Zlotnik</h1>
      <p className={s.titleText}>Frontend Developer</p>
    </div>
  )
}
