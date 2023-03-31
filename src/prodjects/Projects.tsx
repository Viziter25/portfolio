import React from 'react';
import s from './Projects.module.css'
import styles from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import shelter from './../assets/img/shelter.png'
import cards from './../assets/img/cards.jpg'
import social from './../assets/img/social.jpg'
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
        backgroundImage: `url(${shelter} )`
      },
      title: 'Shelter',
      description: 'Technology stack: HTML, CSS, media queries, transformation & animation, perfect-pixel, responsive design, modal window',
      url: 'https://viziter25.github.io/shelter'
    },
    {
      style: {
        backgroundImage: `url(${cards} )`
      },
      title: 'Training YourSelf',
      description: 'Technology stack: JavaScript, TypeScript, SCSS, React, Redux Toolkit, Redux-thunk, Axios, Formik, Material UI, Yap, Refactoring, Deploying; React Hook; React-Router-dom.',
      url: 'https://viziter25.github.io/cards'
    },
    {
      style: {
        backgroundImage: `url(${social} )`
      },
      title: 'Social Network',
      description: 'Technology stack: JavaScript, TypeScript, CSS, React, Redux, Redux-thunk, Axios, React Hook, Deploying, organizing correct app architecture.',
      url: 'https://viziter25.github.io/'
    },
  ]

  return (
    <div className={s.projects} id='projects'>
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


