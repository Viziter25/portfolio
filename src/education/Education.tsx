import React from 'react';
import s from './Education.module.css'
import styles from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

export const Education = () => {
  return (
    <div className={s.education}>
      <div className={styles.container}>
        <div className={s.educationContainer}>
          <Title title={'Education'}/>
          <table className={s.table}>
            <tr>
              <td>BNTU</td>
              <td>Faculty of Mechanical Engineering</td>
              <td>Engineer</td>
              <td>2011-2016</td>
            </tr>
            <tr>
              <td>BNTU IRQ and TR</td>
              <td>Economics and Management</td>
              <td>Economist-manager</td>
              <td>2014-2016</td>
            </tr>
            <tr>
              <td>Online courses</td>
              <td>Codeacademy</td>
              <td>HTML, CSS</td>
              <td>2022</td>
            </tr>
            <tr>
              <td>Online courses</td>
              <td>The Rolling Scopes School</td>
              <td>JavaScript/Front-end</td>
              <td>2022</td>
            </tr>
            <tr>
              <td>Online courses</td>
              <td>Udemy</td>
              <td>JavaScript + React</td>
              <td> 2022</td>
            </tr>
            <tr>
              <td>Online courses</td>
              <td>IT-INCUBATOR</td>
              <td>Front-end</td>
              <td>2022-now</td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  );
};