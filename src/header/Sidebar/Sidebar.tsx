import React, {FC} from 'react'
import s from './Sidebar.module.css'
import closeIcon from './closeOutline.svg'


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
            // id={'hw5-menu-close'}
          />
        </button>

        <nav className={s.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">My project</a>
            <a href="">Education</a>
            <a href="">Contacts</a>
        </nav>
      </aside>
    </>
  )
}
