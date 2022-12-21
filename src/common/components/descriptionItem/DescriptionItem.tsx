import React from 'react';
import s from './DescriptionItem.module.css';

const DescriptionItem = (props: {title: string, description: string}) => {
  return (
    <div className={s.projectItem}>
      <h5 className={s.title}>{props.title}</h5>
      <div className={s.line}/>
      <p></p>
      <span className={s.description}>``
          {props.description}
        </span>
    </div>
  );
};

export default DescriptionItem;

