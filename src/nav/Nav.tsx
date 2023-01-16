import React from 'react';
import s from './Nav.module.css'
import {Fade} from 'react-awesome-reveal';

export const Nav = () => {
  return (
    <div className={s.nav}>
      <Fade direction="left">
        <a href="">Main</a>
        <a href="">Skills</a>
        <a href="">My project</a>
        {/*<a href="">Education</a>*/}
        <a href="">Contacts</a>
      </Fade>
    </div>
  );
};
