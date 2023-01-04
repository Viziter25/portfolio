import React, {FC} from 'react';
import s from './Project.module.css'
import DescriptionItem from '../../common/components/descriptionItem/DescriptionItem';

type ProjectPropsType = {
  title: string
  description: string
  style: { backgroundImage: string }
  url: string
}


export const Project: FC<ProjectPropsType> = ({url, title, style, description}) => {
  return (
    <a href={url} className={s.projectUrl}>
      <div className={s.project}>
        <div className={s.imageProject} style={style}></div>
        <DescriptionItem title={title} description={description}/>
      </div>
    </a>

  );
};
