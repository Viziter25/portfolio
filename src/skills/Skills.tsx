import React from 'react';
import s from './Skills.module.css'
import styles from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import jsIcon from './../assets/icon/js.png'
import reactIcon from './../assets/icon/react.png'
import cssIcon from './../assets/icon/css.png'
import reduxIcon from './../assets/icon/redux.svg'
import testingIcon from './../assets/icon/debugging.png'
import apiIcon from './../assets/icon/api.png'
import {Fade} from 'react-awesome-reveal';

type SkillsType = {
  logo: string,
  title: string,
  description: string
}


export const Skills = () => {

  const skills: SkillsType[] = [
    {
      logo: jsIcon,
      title: 'JavaScript / TypeScript',
      description: 'Data types, functions, promises, scope, event loop, async/await, class, prototype/proto, OOP, try/catch'
    },
    {
      logo: cssIcon,
      title: 'HTML / CSS / SASS',
      description: 'Fundamentals HTML tags, semantic HTML, positioning, box modal, selectors, flexbox, grid, media queries, transformation & animation, perfect-pixel, responsive design'
    },
    {
      logo: reactIcon,
      title: 'React',
      description: 'Class and functional components, hooks, state & props, components life-cycle, routing, conditional rendering, HOC, SPA.'
    },
    {logo: reduxIcon, title: 'Redux', description: 'Actions & thunks, reducer, store, flux'},
    {logo: testingIcon, title: 'Testing, Debugging', description: 'TDD, Story book,Snapshot, Unit tests'},
    {
      logo: apiIcon,
      title: 'REST API',
      description: 'Work with the server, HTTPS requests, Query parameters, status codes, error processing, axios library'
    },
  ]

  return (
    <div className={s.skills} id='skills'>
      <div className={styles.container}>
        <Fade direction='left' duration={2000}>
          <div className={s.skillsContainer}>
            <Title title={'Skills'}/>
            <div className={s.skillsBlock}>
              {skills.map(elem => <Skill key={elem.title} logo={elem.logo} title={elem.title}
                                         description={elem.description}/>)}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
