import React from 'react';
import s from './Skill.module.css'
import DescriptionItem from '../../common/components/descriptionItem/DescriptionItem';

type SkillPropsType = {
  logo: string
  title: string
  description:string
}

export const Skill = (props: SkillPropsType) => {

  return (
    <div className={s.skill}>
      <div className={s.iconsBlock}>
        <img src={props.logo} className={s.icon} alt={props.title}/>
      </div>
      <DescriptionItem title={props.title} description={props.description}/>
    </div>
  );
};
