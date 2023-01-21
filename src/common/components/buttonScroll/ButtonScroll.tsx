import {useEffect, useState} from 'react';
import s from  './ButtonScroll.module.css'


export const ButtonScroll = () => {
debugger
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={s.buttonBlock}>
      <button
        className={scroll < 300 ? "" : s.show}
        onClick={handleUpButton}
      >
        Go Up
      </button>
    </div>
  )
}