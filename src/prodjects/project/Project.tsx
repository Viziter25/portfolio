import React from 'react';
import s from './Project.module.css'
import DescriptionItem from '../../common/components/descriptionItem/DescriptionItem';

type ProjectPropsType = {
  title: string
  description: string
  style: { backgroundImage:string }
}



export const Project = (props: ProjectPropsType) => {
  return (
    <div className={s.project}>
      <div className={s.imageProject} style={props.style}>
        <button className={s.button}>view</button>
      </div>
      <DescriptionItem title={props.title} description={props.description}/>
    </div>
  );
};
