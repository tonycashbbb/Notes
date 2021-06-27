import React from 'react'
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'
import f7 from './7.png'
import f8 from './8.png'
import f9 from './9.png'
import f10 from './10.png'

const Navbar = () => {
  return (
    <>
      <div className={s.row}>
        <div className={s.item}>
          <NavLink to={"/electronics"}>
            <div><img src={f1} alt=""/></div>
            <div className={s.item__title}>Electronics</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/computers"}>
            <div><img src={f2} alt=""/></div>
            <div className={s.item__title}>Computers and networks</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/appliances"}>
            <div><img src={f3} alt=""/></div>
            <div className={s.item__title}>Appliances</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/repair"}>
            <div><img src={f4} alt=""/></div>
            <div className={s.item__title}>Construction and repair</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/house"}>
            <div><img src={f5} alt=""/></div>
            <div className={s.item__title}>House and garden</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/auto"}>
            <div><img src={f6} alt=""/></div>
            <div className={s.item__title}>Auto and moto</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/beauty"}>
            <div><img src={f7} alt=""/></div>
            <div className={s.item__title}>Beauty and sport</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/kids"}>
            <div><img src={f8} alt=""/></div>
            <div className={s.item__title}>Children and mothers</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/office"}>
            <div><img src={f9} alt=""/></div>
            <div className={s.item__title}>Work and office</div>
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={"/food"}>
            <div><img src={f10} alt=""/></div>
            <div className={s.item__title}>Food</div>
          </NavLink>
        </div>
      </div>
      <ul className={s.nav}>
        <li><NavLink to={'#'}>Smart Phones</NavLink></li>
        <li><NavLink to={'#'}>Car Batteries</NavLink></li>
        <li><NavLink to={'#'}>Battery chargers</NavLink></li>
        <li><NavLink to={'#'}>Heaters</NavLink></li>
        <li><NavLink to={'#'}>Thermoses</NavLink></li>
        <li><NavLink to={'#'}>TVs</NavLink></li>
        <li><NavLink to={'#'}>Table lamps</NavLink></li>
        <li><NavLink to={'#'}>Cofee machines</NavLink></li>
        <li><NavLink to={'#'}>Office chairs</NavLink></li>
        <li><NavLink to={'#'}>Windscreen washers</NavLink></li>
        <li><NavLink to={'#'}>Wiper blades</NavLink></li>
        <li><NavLink to={'#'}>Games for PS</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar

