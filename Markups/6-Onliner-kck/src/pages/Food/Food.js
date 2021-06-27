import React from 'react'
import s from './Food.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'

const Food = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Pizza</li></NavLink>
          <NavLink to={"#"}><li>Sushi</li></NavLink>
          <NavLink to={"#"}><li>Burgers</li></NavLink>
          <NavLink to={"#"}><li>Fast food</li></NavLink>
          <NavLink to={"#"}><li>Shawerma</li></NavLink>
          <NavLink to={"#"}><li>Meat and fish</li></NavLink>
          <NavLink to={"#"}><li>Pasta</li></NavLink>
          <NavLink to={"#"}><li>Vegetarian</li></NavLink>
          <NavLink to={"#"}><li>Vegan</li></NavLink>
          <NavLink to={"#"}><li>Desserts, sweet pastries</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Meat and fish sets"}
                         bgc={"rgb(236, 190, 122)"}
            imgUrl={f2}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Pizza Domino's"}
                         bgc={"rgb(127, 195, 239)"}
                         text={"Must have for vacations and trips"}
            imgUrl={f1}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Beer sets and dinner for couples"}
                         bgc={"rgb(244, 135, 122)"}
                         imgUrl={f3}
                         text={"If you don't have a charger in box then you have it in catalog"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
