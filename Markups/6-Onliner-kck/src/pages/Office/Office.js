import React from 'react'
import s from './Office.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'

const Office = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Office equipment and supplies</li></NavLink>
          <NavLink to={"#"}><li>Office furniture</li></NavLink>
          <NavLink to={"#"}><li>Trade and finance</li></NavLink>
          <NavLink to={"#"}><li>Publishing and Printing</li></NavLink>
          <NavLink to={"#"}><li>Hygiene and nutrition</li></NavLink>
          <NavLink to={"#"}><li>CCTV</li></NavLink>
          <NavLink to={"#"}><li>Transport and transportation</li></NavLink>
          <NavLink to={"#"}><li>Industry and construction</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Large format printers"}
                         bgc={"rgb(0, 177, 187)"}
                         imgUrl={f1}
                         text={"For promotional items and drawings"}/>
            <SectionItem title={"Breathalyzer"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f2}
                         text={"Drink responsibly"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Antiseptic Dispensers"}
                         bgc={"rgb(71, 76, 102)"}
                         imgUrl={f3}/>
            <SectionItem title={"IP cameras"}
                         bgc={"rgb(226, 163, 60)"}
                         imgUrl={f4}
                         text={'As well tables and compacts'}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Laptops for work"}
                         bgc={"rgb(163, 166, 179)"}
                         imgUrl={f5}
                         text={"More than 1300 offers"}/>
            <SectionItem title={"Thermal printers"}
                         bgc={"rgb(137, 133, 255)"}
                         imgUrl={f6}
                         text={"Printing receipts and labels"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Office
