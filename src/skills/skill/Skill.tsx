import React from 'react';
import s from './Skill.module.css'
import DescriptionItem from '../../common/components/descriptionItem/DescriptionItem';

type SkillPropsType = {
  title: string
  description:string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <div className={s.skill}>
      <div className={s.icon}></div>
      <DescriptionItem title={props.title} description={props.description}/>
    </div>
  );
};
