import React from 'react'
import s from './Placement.module.css'
import {NavLink} from "react-router-dom";

import first from './first.png'
import second from './second.png'
import third from './third.png'
import fourth from './fourth.png'

const Placement = (props) => {
  return (
    <div className={s.bgc}>
      <div className={s.top}>
        <div className={s.kek}>
          <button onClick={() => {props.setPlacement(); props.setShow()}}>
          <span className={s.offliner}>
              <NavLink to={"/"}>Offl<span className={s.l}>i</span>ner</NavLink>
          </span>
          </button>
        </div>
        <div className={s.btns}>
          <div className={s.btn}>
            info@offliner.pl
          </div>
          <div className={s.btn}>
            +48 777 777 777
          </div>
          <div className={s.btn}>
            +48 888 888 888
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <img src={process.env.PUBLIC_URL + '/placement.png'} alt="a" width={"100%"}/>
        <div className={s.text}>
          <div className={s.title}>
            More than 8000 users every day
          </div>
          <div className={s.join}>
            Join to the community
          </div>
          <div className={s.seo}>
            <div className={s.seo__item}>
              <div className={s.photo}>
                <img src={first} alt=""/>
              </div>
              <div className={s.seo__title}>Free adding of items</div>
              <div className={s.seo__text}>We create product cards for you. You just have to put down prices.</div>
            </div>
            <div className={s.seo__item}>
              <div className={s.photo}>
                <img src={second} alt=""/>
              </div>
              <div className={s.seo__title}>Savings on SEO and website</div>
              <div className={s.seo__text}>We ourselves promote your products in Google</div>
            </div>
            <div className={s.seo__item}>
              <div className={s.photo}>
                <img src={third} alt=""/>
              </div>
              <div className={s.seo__title}>Constant help and support</div>
              <div className={s.seo__text}>We will help you connect to the directory. We'll tell, show, explain</div>
            </div>
            <div className={s.seo__item}>
              <div className={s.photo}>
                <img src={fourth} alt=""/>
              </div>
              <div className={s.seo__title}>Fair prices for services</div>
              <div className={s.seo__text}>Accommodation costs less than 60 cents per day.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placement
