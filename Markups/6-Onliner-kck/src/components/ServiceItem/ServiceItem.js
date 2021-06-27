import React from 'react'
import s from './ServiceItem.module.css'

const ServiceItem = ({ title, desc }) => {
  return (
    <li className={s.item}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPH5IV22g9go31_OaiA6CEu02Y1CrJTsB-A&usqp=CAU"
             width={"180px"}
             height={"150px"}/>
      </div>
      <div className={s.body}>
        <div className={s.title}>{title}</div>
        <div className={s.desc}>{desc}</div>
      </div>
    </li>
  )
}

export default ServiceItem
