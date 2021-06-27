import React from 'react'
import s from './Contacts.module.css'
import {NavLink} from "react-router-dom";

const Contacts = () => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <h1 className={s.h1}>Send news. How to quickly contact <div>the editorial office of Offliner</div></h1>

        <p className={s.ppp}>If you have become an eyewitness to interesting events, want to talk about a problem or share your joy, then
          here are <div>some surefire ways to quickly contact our journalists.</div></p>

        <img src="https://content.onliner.by/news/820x5616/d5d193636a6671810fb6a08ccda66495.jpeg" alt="kek"/>

        <p className={s.ppp}><h1>Traditionally: Phone and E-mail</h1></p>
        <p className={s.ppp}>Our e-mail: <span>info@offliner.pl</span>. <div>Phone: <b>+48 777 777 777.</b></div></p>

        <p className={s.ppp}><h1>Telegram. Quickly and anonymously</h1></p>
        <p className={s.ppp}><span>@gaonliner</span> - Auto department (accidents, traffic situations, bicycles, car sharing).</p>
        <p className={s.ppp}><span>@stopnoise</span> — Department "Technologies" (everything on the topic of gadgets, Internet and mobile communications).</p>
        <p className={s.ppp}><span>@lechmeleh</span> — department "Real estate" (city news, emergency, conflicts).</p>

        <p className={s.qq}><span>Our Telegram channel. Subscribe</span>, <b>there are only important news</b></p>
      </div>
    </div>
  )
}

export default Contacts
