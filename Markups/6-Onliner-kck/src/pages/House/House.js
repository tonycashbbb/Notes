import React from 'react'
import s from './House.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'

const House = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>New year and holidays</li></NavLink>
          <NavLink to={"#"}><li>Bathroom and toilet</li></NavLink>
          <NavLink to={"#"}><li>Kitchen</li></NavLink>
          <NavLink to={"#"}><li>Water supply, heating</li></NavLink>
          <NavLink to={"#"}><li>Furniture for home</li></NavLink>
          <NavLink to={"#"}><li>Bedroom products and home textiles</li></NavLink>
          <NavLink to={"#"}><li>Gardening equipment and tools</li></NavLink>
          <NavLink to={"#"}><li>Rest in the country </li></NavLink>
          <NavLink to={"#"}><li>Site arrangement</li></NavLink>
          <NavLink to={"#"}><li>Decor and interior</li></NavLink>
          <NavLink to={"#"}><li>Lighting and power supply</li></NavLink>
          <NavLink to={"#"}><li>Smart home and security</li></NavLink>
          <NavLink to={"#"}><li>Garment care, washing</li></NavLink>
          <NavLink to={"#"}><li>Cooking utensils</li></NavLink>
          <NavLink to={"#"}><li>Tableware and cutlery</li></NavLink>
          <NavLink to={"#"}><li>Kitchen tools and accessories</li></NavLink>
          <NavLink to={"#"}><li>Plant growing</li></NavLink>
          <NavLink to={"#"}><li>Pet supplies</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Lawn mowers"}
                         bgc={"rgb(97, 145, 150)"}
                         imgUrl={f1}
                         text={'Perfect lawn'}/>
            <SectionItem title={"Braziers, grills, barbecue"}
                         bgc={"rgb(0, 177, 187)"}
                         imgUrl={f2}
                         text={"With cupboards and shelves"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Garden swing"}
                         bgc={"rgb(236, 190, 122)"}
                         imgUrl={f3}
                         text={"Relaxation to the maximum"}/>
            <SectionItem title={"Insect killers"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f4}
                         text={"As well as scarers and traps"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Chairs for kitchen and bar"}
                         bgc={"rgb(223, 199, 193)"}
                         imgUrl={f5}
                         text={"More than 1000 offers"}/>
            <SectionItem title={"Coffee capsules"}
                         bgc={"rgb(94, 150, 174)"}
                         imgUrl={f6}
                         text={"More than 350 offers"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default House
