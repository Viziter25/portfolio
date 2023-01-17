import React from 'react';
import s from './Nav.module.css'
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-scroll'

export const Nav = () => {
  return (
    <div className={s.nav}>
      <Fade direction={'left'}>
        <Link activeClass={s.active}
              to="main"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}>
          Main
        </Link>
        <Link activeClass={s.active}
              to="skills"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}>
          Skills
        </Link>
        <Link activeClass={s.active}
              to="projects"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}>
          My project
        </Link>
        {/*<a href="">Education</a>*/}
        <Link activeClass={s.active}
              to="contacts"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}>
          Contacts
        </Link>
      </Fade>
    </div>
  );
};
