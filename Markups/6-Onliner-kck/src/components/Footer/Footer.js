import React from 'react'
import s from './Footer.module.css'
import {NavLink} from "react-router-dom";

const Footer = (props) => {
  return (
    <div className={s.footer}>
      <ul className={s.nav}>
        <li><NavLink to="/about">About company</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><NavLink to="/contacts">Advertisement</NavLink></li>
        <li>
          <button onClick={() => {props.setShow(); props.setPlacement()}}>
            <NavLink to="/placement">Placement in the catalog</NavLink>
          </button>
        </li>
        <li><NavLink to="/vacancies">Vacancies</NavLink></li>
        <li><NavLink to="/manifesto">Manifesto</NavLink></li>
        <li><NavLink to="/contacts">Terms of use</NavLink></li>
        <li><NavLink to="/contacts">Public contracts</NavLink></li>
        <li><NavLink to="/contacts">Privacy policy</NavLink></li>
        <li><NavLink to="/support">Users support</NavLink></li>
        <li><NavLink to="/contacts">Return Policy</NavLink></li>
      </ul>
    </div>
  )
}

export default Footer
