import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import styles from '../common/styles/Container.module.css'
import burgerIcon from './burger.svg'
import {Nav} from '../nav/Nav';
import {Sidebar} from './Sidebar/Sidebar';
import {HeaderIcons} from '../headerIcon/HeaderIcons';
import {Fade} from 'react-awesome-reveal';

export const Header = () => {


  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden')
    !open && (document.body.style.overflow = 'unset')
  }, [open]) // отключает прокрутку при открытом меню


  return (
    <header className={s.header}>
      <div className={styles.container}>
        <div className={s.headerContainer}>
          <img
            src={burgerIcon}
            id={'hw5-burger-menu'}
            className={s.burgerMenuIcon}
            onClick={handleOpen}
            alt={'open menu'}
          />
              <Nav/>
          <Fade direction="right">
            <HeaderIcons/>
          </Fade>
          <Sidebar open={open} handleClose={handleClose}/>
        </div>
      </div>

    </header>
  );
};
