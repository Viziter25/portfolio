import React from 'react';
import s from './Skills.module.css'
import styles from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
  return (
    <div className={s.skills}>
      <div className={styles.container}>
        <div className={s.skillsContainer}>
          <h2 className={s.title}>Skills</h2>
          <div className={s.skillsBlock}>
            <Skill title={'js'} description={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}/>
            <Skill title={'css'} description={'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'}/>
            <Skill title={'react'} description={'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
