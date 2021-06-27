import React from 'react'
import s from './Electronics.module.css'
import {NavLink} from "react-router-dom";
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import f1 from './puls.png'
import f2 from './action.png'
import f3 from './siaomi.png'
import f4 from './charger.png'
import f5 from './bluetooth.png'
import f6 from './watch.png'

const Electronics = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.flex}>
        <ul className={s.navbar}>
          <NavLink to={"#"}><li>Mobile phones and accessories</li></NavLink>
          <NavLink to={"#"}><li>TVs and videos</li></NavLink>
          <NavLink to={"#"}><li>Tablets and e-books</li></NavLink>
          <NavLink to={"#"}><li>Audio equipment</li></NavLink>
          <NavLink to={"#"}><li>Hi-Fi audio</li></NavLink>
          <NavLink to={"#"}><li>Photo and video equipment</li></NavLink>
          <NavLink to={"#"}><li>Video games</li></NavLink>
          <NavLink to={"#"}><li>Gadgets</li></NavLink>
          <NavLink to={"#"}><li>Smart house</li></NavLink>
          <NavLink to={"#"}><li>E-transport</li></NavLink>
          <NavLink to={"#"}><li>Telephony</li></NavLink>
          <NavLink to={"#"}><li>Music equipment</li></NavLink>
          <NavLink to={"#"}><li>Optic equipment</li></NavLink>
        </ul>
        <div className={s.section__row}>
          <div className={s.section__column}>
            <SectionItem title={"Pulse oximeter"}
                         bgc={"rgb(234, 171, 171)"}
                         imgUrl={f1}
                         text={"watch oxygen in blood"}/>
            <SectionItem title={"Action cameras"}
                         bgc={"rgb(255, 191, 163)"}
                         imgUrl={f2}
                         text={"Price starts from 19.99$"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Xiaomi Mi True Wireless"}
                         bgc={"rgb(157, 171, 221)"}
                         imgUrl={f3}
                         text={"The most popular item in the catalog"}/>
            <SectionItem title={"Portable charger"}
                         bgc={"rgb(127, 195, 239)"}
                         imgUrl={f4}
                         text={"Must have for vacations and trips"}/>
          </div>
          <div className={s.section__column}>
            <SectionItem title={"Bluetooth Loudspeakers"}
                         bgc={"rgb(236, 190, 122)"}
                         imgUrl={f5}
                         text={"If you don't have a charger in box then you have it in catalog"}/>
            <SectionItem title={"Fitness watches"}
                         bgc={"rgb(94, 150, 174)"}
                         imgUrl={f6}
                         text={"Stylish accessory with healthcare"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
