import React from 'react'
import s from './PLQ.module.css'

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'
import f4 from './4.png'
import f5 from './5.png'
import f6 from './6.png'
import {NavLink} from "react-router-dom";

const PLQ = () => {
  return (
    <div className={s.w}>
      <div className={s.photo}>
        <img src={f1} alt=""/>
        <div className={s.textph}>How is quarantine going in Poland?</div>
      </div>
      <p className={s.p}>
        A little over a year ago, our planet got sick. The coronavirus has become a big common problem, but everyone
        treats the problem differently. Moreover, there are dissidents both among people and among countries. In
        Belarus, the virus is almost invisible. Remove the masks from the faces of people - and you will not understand
        that a dangerous infection is flying in the air. Shopping centers work, in the cafes of the crowd, who come to
        the country, no one strictly checks. But neighboring Poland cannot be recognized because of the "covid". Today,
        as part of the Diary of a Moved One, I will tell you how the quarantine goes on the other side of the western
        border, what happens there with gastronomy and trade.
      </p>
      <div className={s.text}>
        <div className={s.title}>Half-empty plane</div>
        <div className={s.body}>The fact that the authorities in Poland take the coronavirus seriously, you understand
          immediately upon arrival at the airport. In Warsaw's Chopin, all establishments operate exclusively to take
          away. Even at McDonald’s, tables are sealed, and employees adjust the distance in line. It is forbidden to sit
          next to other people in the waiting rooms. This is in stark contrast to the Minsk airport, where just before
          landing, when almost all passengers arrived at the gate, the distance between people was like queuing at the
          Hippo on 31 December.
        </div>
      </div>
      <div className={s.img}>
        <img src={f2} alt=""/>
      </div>
      <div className={s.img}>
        <img src={f3} alt=""/>
      </div>
      <div className={s.text}>
        <div className={s.body}>In cities, the occupancy rate of buses and trams is regulated formally: half of the
          seats have signs asking you not to sit down, and you cannot approach the driver's seat closer than one and a
          half meters (in Poland, tram and bus drivers do not sell coupons now). But no one counts standing passengers.
          At peak times, public transport seems to be 60-70% clogged.
        </div>
      </div>
      <div className={s.img}>
        <img src={f4} alt=""/>
      </div>
      <div className={s.text}>
        <div className={s.title}>Quarantine</div>
        <div className={s.body}>Until recently, all people arriving in Poland from outside the EU were required to
          undergo a 10-day quarantine. From January 23, instead of quarantine, you can show a negative test result for
          SARS-CoV-2, which you received no more than 48 hours before crossing the border. We didn't have such an
          opportunity (we arrived on January 15), so we had to hang around at home for 10 days. While still on the
          Minsk-Warsaw plane, the flight attendants handed out two large questionnaires, in which they had to indicate
          the place where you would be quarantined and answer a long series of questions. It is better to hurry up with
          filling in: it takes only an hour to fly, and the questionnaires are collected before landing.
        </div>
      </div>
      <div className={s.img}>
        <img src={f5} alt=""/>
      </div>
      <div className={s.text}>
        <div className={s.body}>
          <div className={s.title}>Rate content</div>

        </div>
      </div>
      <div className={s.img}>
        <img src={f6} alt=""/>
      </div>
    </div>
  )
}

export default PLQ
