import React from 'react'
import s from './Rental.module.css'

import f1 from './1.png'
import f2 from './2.png'
import f3 from './3.png'

const Rental = () => {
  return (
    <div>
      <div className={s.photo}>
        <img src={f1} alt=""/>
        <img src={f2} alt=""/>
      </div>

      <div className={s.row}>
        <div className={s.item + ' ' + s.first}>
          <h2>1300$</h2>
        </div>
        <div className={s.item}>
          <div className={s.text}>3 bedroom flat</div>
        </div>
        <div className={s.item}>
          <div className={s.text}>Owner</div>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.cont}>
          <div className={s.galka}>
            <div className={s.q}>
              <div className={s.img}>
                <img src={f3} alt=""/>
                <span>Furniture</span>
              </div>
              <div className={s.img}>
                <img src={f3} alt=""/>
                <span>Refrigerator</span>
              </div>
              <div className={s.img}>
                <img src={f3} alt=""/>
                <span>TV</span>
              </div>
            </div>
            <div className={s.q}>
              <div className={s.img}>
                <img src={f3} alt=""/>
                <span>Internet</span>
              </div>
              <div className={s.img}>
                <img src={f3} alt=""/>
                <span>Air conditioning</span>
              </div>
              <div className={s.img}>
                <img src={f3} alt=""/>
                <span>Washer</span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cont}>
          <div className={s.num}>+48 777 777 778</div>
          <div className={s.time}>from 9AM to 5PM</div>
          <div className={s.contact}>Kinga</div>
        </div>
      </div>
    </div>
  )
}

export default Rental
