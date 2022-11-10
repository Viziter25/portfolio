import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
  title: string
  description: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={s.project}>
      <div className={s.imageProject}>
        <button className={s.button}>view</button>
      </div>
      <div className={s.projectItem}>
        <h3>{props.title}</h3>
        <span className={s.description}>
        {props.description}
      </span>
      </div>

    </div>
  );
};
