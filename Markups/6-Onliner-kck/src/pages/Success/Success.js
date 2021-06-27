import React from 'react'
import s from './Success.module.css'
import {NavLink} from "react-router-dom";

const Success = (props) => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <h1 className={s.h1}>Your request was sent successfully</h1>
        <img src="https://st.depositphotos.com/1144472/4543/i/950/depositphotos_45438923-stock-photo-woman-showing-thumbs-up-gesture.jpg"
             height={"500px"}
             alt=""/>
        <div className={s.link}>
          <button onClick={() => {props.setShow()}}><NavLink to={"/"}>Go back to offliner</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default Success
