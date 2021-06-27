import React from 'react'
import s from './Houses.module.css'

const HouseItem = ({ price, src }) => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src={src}/>
      </div>
      <div className={s.price}>{price}</div>
    </div>
  )
}

export default HouseItem
