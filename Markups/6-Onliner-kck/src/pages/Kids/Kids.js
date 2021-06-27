import React from 'react'
import s from './Kids.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'

const Kids = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Walks and trips</li></NavLink>
          <NavLink to={"#"}><li>Children's transport</li></NavLink>
          <NavLink to={"#"}><li>Children's furniture</li></NavLink>
          <NavLink to={"#"}><li>Baby sleep</li></NavLink>
          <NavLink to={"#"}><li>Board games and educational toys</li></NavLink>
          <NavLink to={"#"}><li>Toys and games</li></NavLink>
          <NavLink to={"#"}><li>Outdoor games and sports</li></NavLink>
          <NavLink to={"#"}><li>Newborn care </li></NavLink>
          <NavLink to={"#"}><li>Goods for school</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Strollers"}
                         bgc={"rgb(0, 177, 187)"}
                         imgUrl={f1}
                         text={'Including accessories'}/>
            <SectionItem title={"Cribs"}
                         bgc={"rgb(137, 133, 255)"}
                         imgUrl={f2}
                         text={"More than 1000 offers"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Play complexes"}
                         bgc={"rgb(234, 171, 171)"}
                         imgUrl={f3}
                         text={"And also bungees, ropes, stairs"}/>
            <SectionItem title={"Car seats"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f4}
                         text={"From 0 to 36 kg"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Educational toys"}
                         bgc={"rgb(155, 174, 59)"}
                         imgUrl={f5}
                         text={"More than 300 offers"}/>
            <SectionItem title={"Smart watch for kids"}
                         bgc={"rgb(41, 121, 255)"}
                         imgUrl={f6}
                         text={"So that the baby is always in touch"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kids
