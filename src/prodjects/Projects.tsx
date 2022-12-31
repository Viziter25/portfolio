import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import {Project} from './project/Project';

import todoImage from './../assets/img/counter.jpg'
import {Title} from '../common/components/title/Title';


export const Projects = () => {

  const todolist = {
    backgroundImage: `url(${todoImage} )`
  }

  return (
    <div className={s.projects}>
      <div className={styles.container}>
        <div className={s.projectsContainer}>
          <Title title={'My projects'}/>
          <div className={s.projectsBlock}>
            <Project style={todolist} title={'Todolist'} description={'There are many variatio ns of passages of Lorm available, bu in some form'}/>
            <Project style={todolist} title={'Counter'} description={'222222'}/>
          </div>
        </div>
      </div>
    </div>
  );
};


