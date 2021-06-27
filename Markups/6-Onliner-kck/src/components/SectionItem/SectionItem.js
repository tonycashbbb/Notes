import React from 'react'
import s from "./SectionItem.module.css";

const SectionItem = ({ title, text, imgUrl, bgc }) => {
  return (
    <div className={s.section__item + " " + s.first}  style={{backgroundColor: bgc}}>
      <div className={s.section__title}>{title}</div>
      <div className={s.section__text}>{text}</div>
      <div className={s.photo}>
        <img src={imgUrl} alt="a"/>
      </div>
    </div>
  )
}

export default SectionItem
