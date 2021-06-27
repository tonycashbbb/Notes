import React from 'react'
import s from './Services.module.css'
import ServiceItem from "../../components/ServiceItem/ServiceItem";

const Services = () => {
  return (
    <div className={s.row}>
      <div className={s.nav}>
        <div className={s.nav__title}><b>City:</b></div>
        <div className={s.inpt}>
          <input type="text"/>
        </div>

        <div className={s.nav__title}><b>Section</b></div>
        <div className={s.nav__item}>Construction and finishing works </div>
        <div className={s.nav__item}>Transportation</div>
        <div className={s.nav__item}>Everything for home</div>
        <div className={s.nav__item}>Repair of equipment and tools</div>
        <div className={s.nav__item}>Cleaning</div>
        <div className={s.nav__item}>Internet</div>
        <div className={s.nav__item}>Beauty and style</div>
        <div className={s.nav__item}>Sport</div>
        <div className={s.nav__item}>Tourism</div>
        <div className={s.nav__item}>Auto and moto</div>
        <div className={s.nav__item}>Help with computers</div>
        <div className={s.nav__item}>Design</div>
      </div>

      <ul className={s.list}>
        <ServiceItem title={"Craft and install hidden doors"}
                     desc={"Laying of partitions. Calculation once a week. You can start already. Number of people " +
                     " per cube and when you are ready to start"}/>
        <ServiceItem title={"Employment of a new employee"}
                     desc={"It is required to draw up a contract with a new employee. Explain how to count alimony. Features of the driver's design with his car. How to lead"}/>
        <ServiceItem title={"Polishing"}
                     desc={"Remove the shagreen on the bonnet of bmw e46 by polishing. Color dark green "}/>
        <ServiceItem title={"Stretch ceilings 45sq.m"}
                     desc={"Stretch the ceilings in the room, the corridors and the hall, about 45 sq.m (12 sq.m; 15.7 sq.m, 6.2 sq.m and 6.1 sq.m). The material is the most budgetary."}/>
        <ServiceItem title={"York haircut (full)"}
                     desc={"Cut a Yorkie (5 years old, male, 2.7 kg) District 4 Hospital, Minsk. If you live nearby, we will come to you or visit us. There are no mats."}/>
        <ServiceItem title={"Craft and install hidden doors"}
                     desc={"Laying of partitions. Calculation once a week. You can start already. Number of people "}/>
        <ServiceItem title={"For individual entrepreneurs one-time services of an accountant."}
                     desc={"It is required to draw up a contract with a new employee. Explain how to count alimony. Features of the driver's design with his car."}/>
        <ServiceItem title={"Craft and install hidden doors"}
                     desc={"Laying of partitions. Calculation once a week. You can start already. Number of people " +
                     "" +
                     "price per cube and when you are ready to start"}/>
      </ul>
    </div>
  )
}

export default Services
