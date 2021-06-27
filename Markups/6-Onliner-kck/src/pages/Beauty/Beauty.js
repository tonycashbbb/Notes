import React from 'react'
import s from './Beauty.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'

const Beauty = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Bicycles and accessories</li></NavLink>
          <NavLink to={"#"}><li>Roller skates, skateboards, scooters</li></NavLink>
          <NavLink to={"#"}><li>Electric transport</li></NavLink>
          <NavLink to={"#"}><li>Watches, bags and other accessories</li></NavLink>
          <NavLink to={"#"}><li>Cosmetics, perfumery, accessories</li></NavLink>
          <NavLink to={"#"}><li>Health</li></NavLink>
          <NavLink to={"#"}><li>Body care devices</li></NavLink>
          <NavLink to={"#"}><li>Tourism and camping </li></NavLink>
          <NavLink to={"#"}><li>Trainers, fitness, martial arts</li></NavLink>
          <NavLink to={"#"}><li>Sports nutrition</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"New fragrances"}
                         bgc={"rgb(234, 171, 171)"}
                         imgUrl={f1}
                         text={'And timeless classics. More than 100 brands'}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Dumbbells, kettlebells, barbells"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f2}
                         text={"Deep breath. The arms are wider"}/>
            <SectionItem title={"Hair dye"}
                         bgc={"rgb(137, 133, 255)"}
                         imgUrl={f3}
                         text={"And other coloring products"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Sports protection"}
                         bgc={"rgb(165, 210, 57)"}
                         imgUrl={f4}
                         text={"Gloves, calipers, helmets and complete sets "}/>
            <SectionItem title={"Protein"}
                         bgc={"rgb(118, 106, 118)"}
                         imgUrl={f5}
                         text={"Powder, bars and cookies"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beauty
