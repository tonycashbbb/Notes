import React from 'react'
import s from './Houses.module.css'
import HouseItem from "./HouseItem";
import {NavLink} from "react-router-dom";

const Houses = () => {
  return (
    <div className={s.items}>
      <div className={s.intro_text}>67 ads</div>
      <h2 className={s.qq}>Rental: </h2>
      <div className={s.row}>
        <NavLink to={'/rental'}>
          <HouseItem price={"1300$"}
                     src={"https://content.onliner.by/apartment_rentals/3106590/600x400/bc68f21fbb7ecf40ed1e4bf7cf895dd7.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"2500$"}
                     src={"https://content.onliner.by/apartment_rentals/586976/600x400/d89d4e11809dedfd5cfb48b68aaba807.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"340$"}
                     src={"https://content.onliner.by/apartment_rentals/1907773/600x400/3659ff1fa4bf6cf8394728d469091b28.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"800$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/869da13e6a229712df6fe0942e4df8c8.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"450$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/22daf09160c0a9193b2bea4543a0ed14.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"650$"}
            src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/7ada8f6ecbc6d7b3ea3c6250cc1dd9ef.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"600$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/418d7ae78d01e20655f71101a7e2e616.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"700$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/5cb65c876407e4a1778b388a87825530.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"1100$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/60238d1d716017bc2d239ccd169ce4ad.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"630$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/c1e438d47cedcd32db52e62040dbf90e.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"700$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/5e249d824e14b1ae95cb41764109e967.jpeg"}/>
        </NavLink>
        <NavLink to={'/'}>
          <HouseItem price={"550$"}
                     src={"https://content.onliner.by/apartment_for_sale/2849542/600x400/cb6d0cb0effbad7caa1980f5ab3198aa.jpeg"}/>
        </NavLink>
      </div>
    </div>
  )
}

export default Houses
