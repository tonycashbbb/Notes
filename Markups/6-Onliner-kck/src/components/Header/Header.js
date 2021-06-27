import React from 'react'
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <>
      <div className={s.row}>
        <div className={s.first}>
          <ul className={s.nav}>
            <li><NavLink to={"/catalog"}>Catalog</NavLink></li>
            <li><NavLink to={"/"}>News</NavLink></li>
            <li><NavLink to={"#"}>Autos</NavLink></li>
            <li><NavLink to={"/houses"}>Houses and flats</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"#"}>Flea market</NavLink></li>
            <li><NavLink to={"#"}>Forum</NavLink></li>
          </ul>
          <div className={s.clever}>
            <a href={"#"}>Offliner clever</a>
          </div>
          <div className={s.buks}>
            <a href={"#"}>$ 3.71</a>
          </div>
        </div>
        <div className={s.second}>18+</div>
      </div>

      <div className={s.main__header}>
        <div className={s.search}>
          <span className={s.offliner}>
            <NavLink to={"/"}>Offl<span className={s.l}>i</span>ner</NavLink>
          </span>
          <input className={s.input} type="text" placeholder={"Search in catalog, e.g. apple watch"}/>
          <div className={s.btn}>
            <button onClick={() => props.setShow()}>
              <NavLink to={"/login"}>Log in</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
