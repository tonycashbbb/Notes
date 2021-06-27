import React from 'react'
import s from './Appliances.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'

const Appliances = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Large equipment</li></NavLink>
          <NavLink to={"#"}><li>Built-in appliances</li></NavLink>
          <NavLink to={"#"}><li>Cleaning</li></NavLink>
          <NavLink to={"#"}><li>Garment care, sewing</li></NavLink>
          <NavLink to={"#"}><li>Air conditioning equipment</li></NavLink>
          <NavLink to={"#"}><li>Cooking food</li></NavLink>
          <NavLink to={"#"}><li>Making coffee and tea</li></NavLink>
          <NavLink to={"#"}><li>Food preparation and processing </li></NavLink>
          <NavLink to={"#"}><li>Hair and body care</li></NavLink>
          <NavLink to={"#"}><li>Accessories and related products</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Food waste disposer"}
                         bgc={"rgb(157, 171, 221)"}
                         imgUrl={f1}
                         text={'"Here we\'re gonna throw bones"'}/>
            <SectionItem title={"Dishwasher"}
                         bgc={"rgb(223, 199, 193)"}
                         imgUrl={f2}
                         text={"More than 1000 offers"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Vacuum cleaners for windows"}
                         bgc={"rgb(229, 139, 136)"}
                         imgUrl={f3}
                         text={"Dirt will be washed off"}/>
            <SectionItem title={"Conditioners"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f4}
                         text={"Own climate home"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Сoffee machine"}
                         bgc={"rgb(236, 190, 122)"}
                         imgUrl={f5}
                         text={"More than 300 offers"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appliances
