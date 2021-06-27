import React from 'react'
import s from './Computers.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './ipads.png'
import f2 from './backpack.png'
import f3 from './asus.png'
import f4 from './mouses.png'
import f5 from './routers.png'
import f6 from './wifi.png'

const Computers = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Laptops, computers, monitors</li></NavLink>
          <NavLink to={"#"}><li>Equipment for printing</li></NavLink>
          <NavLink to={"#"}><li>Equipment for design</li></NavLink>
          <NavLink to={"#"}><li>Data storage</li></NavLink>
          <NavLink to={"#"}><li>Input Devices</li></NavLink>
          <NavLink to={"#"}><li>Photo and video equipment</li></NavLink>
          <NavLink to={"#"}><li>Video games</li></NavLink>
          <NavLink to={"#"}><li>Gadgets</li></NavLink>
          <NavLink to={"#"}><li>Accessories</li></NavLink>
          <NavLink to={"#"}><li>Software</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"The tablet of 2020"}
                         bgc={"rgb(0, 177, 187)"}
                         imgUrl={f1}
                         text={"good new items"}/>
            <SectionItem title={"Backpacks for laptops"}
                         bgc={"rgb(157, 171, 221)"}
                         imgUrl={f2}
                         text={"More than 2500 offers"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Laptops"}
                         bgc={"rgb(163, 166, 179)"}
                         imgUrl={f3}
                         text={"More than 5000 offers"}/>
            <SectionItem title={"Gamers keyboards"}
                         bgc={"rgb(97, 145, 150)"}
                         imgUrl={f4}
                         text={"Mechanic and lights"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"4G Routers"}
                         bgc={"rgb(223, 199, 193)"}
                         imgUrl={f5}
                         text={"Wi-Fi at any location"}/>
            <SectionItem title={"Wi-Fi boosters"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f6}
                         text={"Internet even in a bathroom"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Computers
