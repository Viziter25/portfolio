import React, {FC} from 'react'
import s from './Sidebar.module.css'
import closeIcon from './closeOutline.svg'
import {Nav} from '../../nav/Nav';
import {Link} from 'react-scroll';
import {Fade} from 'react-awesome-reveal';


type PropsType = {
  open: boolean
  handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
  const sidebarClass = s.sidebar + (open ? ' ' + s.open : '')
  return (
    <>
      {/*затемнение справа от открытого меню*/}

      {open  && <div className={s.background} onClick={handleClose}/>}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose}>
          <img
            src={closeIcon}
            alt="close sidebar"
          />
        </button>



        <nav className={s.nav}>
          <Fade direction={'left'}>
            <Link activeClass={s.active}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
              Main
            </Link>
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
              Skills
            </Link>
            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
              Project
            </Link>
            {/*<a href="">Education</a>*/}
            <Link activeClass={s.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
              Contacts
            </Link>
          </Fade>
        </nav>
      </aside>
    </>
  )
}
