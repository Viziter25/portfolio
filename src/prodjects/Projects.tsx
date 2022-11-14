import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import {Project} from './project/Project';


export const Projects = () => {
  return (
    <div className={s.projects}>
      <div className={styles.container}>
        <div className={s.projectsContainer}>
          <h2 className={s.title}>My projects</h2>
          <div className={s.projectsBlock}>
            <Project title={'Todolist'} description={'11111111111111111111113333333333333333333333333331111'}/>
            <Project title={'Counter'} description={'222222'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
