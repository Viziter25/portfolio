import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './prodjects/Projects';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './footer/Footer';
import {ButtonScroll} from './common/components/buttonScroll/ButtonScroll';

// import {Education} from './education/Education';

function App() {

  return (
    <div className="App">
      <ButtonScroll/>
      <Header/>
      <Main/>
      <Skills/>
      {/*<Education/>*/}
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
