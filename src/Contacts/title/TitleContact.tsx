import React from 'react';
import s from './TitleContact.module.css'

export const TitleContact = (props: { title :string }) => {
  return (
    <div className={s.title}>
      <h2>{props.title}</h2>
      <div className={s.horizontalLine}>
        <div className={s.top}></div>
        <div className={s.bottom}></div>
      </div>
    </div>
  )
}