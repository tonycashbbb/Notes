import React from 'react'
import s from './Catalog.module.css'
import SectionItem from "../../components/SectionItem/SectionItem";
import Navbar from "../../components/Navbar/Navbar";

import iphone from './iphone.png'
import f2 from './cards.png'
import f3 from './virus.png'
import f4 from './fen.png'
import f5 from './mydlo.png'
import f6 from './metall.png'
import f7 from './mask.png'

const Catalog = () => {
  return (
    <div className={s.white}>
      <div className={s.title}>Catalog</div>

      <Navbar/>

      <div className={s.section__row}>
        <div className={s.section__column}>
          <SectionItem title={"Chargers for new iPhones"}
                       bgc={"rgb(255, 193, 174)"}
                       imgUrl={iphone}
                       text={"If you don't have a charger in box then you have it in catalog"}/>
          <SectionItem title={"Board games"}
                       bgc={"rgb(157, 171, 221)"}
                       imgUrl={f2}
                       text={"For the whole family and friendly company"}/>
        </div>
        <div className={s.section__column}>
          <SectionItem title={"Antiviral and cold medications"}
                       bgc={"rgb(236, 190, 122)"}
                       imgUrl={f3}
                       text={"With home delivery"}/>
        </div>
        <div className={s.section__column}>
          <SectionItem title={"Hair dryers"}
                       bgc={"rgb(229, 139, 136)"}
                       imgUrl={f4}
                       text={"For perfect styling"}/>
          <SectionItem title={"Soap dispensers"}
                       bgc={"rgb(127, 195, 239)"}
                       imgUrl={f5}
                       text={"And other bathroom accessories"}/>
        </div>
        <div className={s.section__column}>
          <SectionItem title={"Thermal paste and liquid metal"}
                       bgc={"rgb(42, 129, 234)"}
                       imgUrl={f6}
                       text={"More than 100 orders"}/>
          <SectionItem title={"Masks"}
                       imgUrl={f7}
                       bgc={"rgb(0, 177, 187)"}
                       text={"and some more"}/>
        </div>
      </div>
    </div>
  )
}

export default Catalog
