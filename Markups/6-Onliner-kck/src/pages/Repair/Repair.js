import React from 'react'
import s from './Repair.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'

const Repair = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Tool</li></NavLink>
          <NavLink to={"#"}><li>Construction equipment</li></NavLink>
          <NavLink to={"#"}><li>Floor coverings</li></NavLink>
          <NavLink to={"#"}><li>Plumbing</li></NavLink>
          <NavLink to={"#"}><li>Water supply, sewerage, ventilation</li></NavLink>
          <NavLink to={"#"}><li>Power supply</li></NavLink>
          <NavLink to={"#"}><li>Heating, thermal insulation</li></NavLink>
          <NavLink to={"#"}><li>Doors, windows </li></NavLink>
          <NavLink to={"#"}><li>Pneumatic tools</li></NavLink>
          <NavLink to={"#"}><li>Machine tools</li></NavLink>
          <NavLink to={"#"}><li>Building and finishing materials</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Perforators"}
                         bgc={"rgb(0, 177, 187)"}
                         imgUrl={f1}
                         text={'more than 500 offers'}/>
            <SectionItem title={"Сoncrete mixers"}
                         bgc={"rgb(234, 171, 171)"}
                         imgUrl={f2}
                         text={"interfere with concrete!"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Compressors"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f3}
                         text={"Popular models from 20.99$"}/>
            <SectionItem title={"Sockets, switches"}
                         bgc={"rgb(223, 199, 193)"}
                         imgUrl={f4}
                         text={"More than 40 types"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Kitchen sinks"}
                         bgc={"rgb(157, 171, 221)"}
                         imgUrl={f5}
                         text={"The beauty of your kitchen"}/>
            <SectionItem title={"Decorative stone and brick"}
                         bgc={"rgb(236, 190, 122)"}
                         imgUrl={f6}
                         text={"For interior and exterior decoration"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repair
