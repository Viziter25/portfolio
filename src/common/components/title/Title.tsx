import s from './Title.module.css'
import React from 'react';


export const Title = (props: { title :string }) => {
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