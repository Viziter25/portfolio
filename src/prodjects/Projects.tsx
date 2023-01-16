import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import todoImage from './../assets/img/counter.jpg'
import todolistImage from './../assets/img/todolist.jpg'
import keyBoardImage from './../assets/img/keyboard.jpg'
import {Title} from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';


type ProjectType = {
  style: { backgroundImage: string }
  title: string,
  description: string,
  url: string
}


export const Projects = () => {

  const project: ProjectType[] = [
    {
      style: {backgroundImage: `url(${todolistImage} )`},
      title: 'Todolist',
      description: 'Technology stack: react, redux, react-redux, redux-thunk, react-router-dom, react-hook-form, typescript, axios, material-ui, redux toolkit',
      url: 'https://viziter25.github.io/ts-todolist-react/'
    },
    {
      style: {
        backgroundImage: `url(${keyBoardImage} )`
      },
      title: 'Keyboard',
      description: 'This application done only JS',
      url: 'https://viziter25.github.io/RSS-Virtual-Keyboard/'
    },
    {
      style: {
        backgroundImage: `url(${todoImage} )`
      },
      title: 'Shelter',
      description: 'Technology stack: HTML, CSS, media queries, transformation & animation, perfect-pixel, responsive design, modal window',
      url: 'https://viziter25.github.io/RSS-Virtual-Keyboard/'
    },
  ]

  return (

    <div className={s.projects}>
      <Fade direction="left" duration={2000}>
        <div className={styles.container}>
          <div className={s.projectsContainer}>
            <Title title={'My projects'}/>
            <div className={s.projectsBlock}>
              {project.map(elem => <Project key={elem.title} title={elem.title} description={elem.description}
                                            style={elem.style} url={elem.url}/>)}
            </div>
          </div>
        </div>
      </Fade>
    </div>

  );
};


