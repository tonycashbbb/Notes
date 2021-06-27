import React from 'react'
import s from './Auto.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'

const Auto = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Tires and wheels</li></NavLink>
          <NavLink to={"#"}><li>Auto chemistry and auto cosmetics</li></NavLink>
          <NavLink to={"#"}><li>Spare parts</li></NavLink>
          <NavLink to={"#"}><li>Oils and technical fluids</li></NavLink>
          <NavLink to={"#"}><li>Car acoustics</li></NavLink>
          <NavLink to={"#"}><li>Car electronics</li></NavLink>
          <NavLink to={"#"}><li>Tools and equipment</li></NavLink>
          <NavLink to={"#"}><li>Accessories </li></NavLink>
          <NavLink to={"#"}><li>Mototechnics</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Torque wrenches and screwdrivers"}
                         bgc={"rgb(226, 163, 60)"}
                         imgUrl={f1}
                         text={'Singles and in sets'}/>
            <SectionItem title={"Car radios"}
                         bgc={"rgb(137, 133, 255)"}
                         imgUrl={f2}
                         text={"More than 1000 offers"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Car acoustics"}
                         bgc={"rgb(244, 135, 128)"}
                         imgUrl={f3}
                         text={"All components of good sound"}/>
            <SectionItem title={"Car batteries"}
                         bgc={"rgb(163, 166, 179)"}
                         imgUrl={f4}
                         text={"More than 1500 offers"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Rims"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f5}
                         text={"More than 3500 offers"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auto
