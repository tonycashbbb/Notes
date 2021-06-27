import React from 'react'
import s from './About.module.css'
import {NavLink} from "react-router-dom";

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <h1>About site</h1>

        <p className={s.ppp}>For questions regarding the work of the resource, you can contact info@offliner.pl.</p>
        <p className={s.ppp}><b>Bank details and legal address:</b></p>
        <p className={s.ppp}>LLC "OFFLINER" (Limited Liability Company "OFFLINER")</p>
        <p className={s.ppp}>
          <li>220069, Warsaw, Dzerzhinsky Ave., 5-613.</li>
          <li>UNP 190657494.</li>
          <li>OKPO 37676608.</li>
          <li>Account BY40TECN30120648100060000000 in JSC "Technobank", Poznan, st. Kropotkina, 44, TECNBY22.</li>
        </p>
        <p className={s.ppp}>Director - Anton Maksimau.</p>
        <p className={s.ppp}>Online edition "Offliner.pl". The certificate of state registration of the mass media No. 16 dated 01/01/2021
          was issued <div>by the Ministry of Information of Poland.</div></p>
        <p className={s.ppp}>Chief Editor - Mikita Yankouski.</p>
        <p className={s.ppp}>Chief Editor - Mikita Yankouski.</p>
        <p className={s.ppp}>Phone - +48 777 777 777.</p>
        <p className={s.ppp}>E-mail: info@offliner.pl.</p>
        <p className={s.ppp}><NavLink to={'#'}>How to quickly contact the Offliner editors</NavLink></p>
        <p className={s.ppp}><b>Information about restrictions.</b> Any use of photos and text, including reprint (in whole and in part), is prohibited without
        <div>the permission of the publisher. nak@offliner.by.</div></p>
      </div>
    </div>
  )
}

export default About
