import React from 'react'
import s from './Support.module.css'
import {NavLink} from "react-router-dom";

const Support = (props) => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <h1 className={s.h1}>Request to support service</h1>
        <p>Are you struggling with the offliner.pl?</p>
        <p>We have a support system, that will help.</p>
        <p>In order to interact with it you should make just a dew things.</p>
        
        <div className={s.form}>
          <div className={s.form__item}>
            <span className={s.label}>Your first and last name:</span>
            <input type="text" placeholder={"Anonymous"}/>
          </div>
          <div className={s.form__item}>
            <span className={s.label}>E-mail:</span>
            <input type="text" placeholder={"Anonymous@gmail.com"}/>
          </div>
          <div className={s.form__item}>
            <span className={s.label}>Your type of problem:</span>
            <input type="text" placeholder={"Want to have more opportunities "}/>
          </div>
          <div className={s.form__item}>
            <span className={s.label}>Where:</span>
            <input type="text" placeholder={"e.g catalog"}/>
          </div>
          <div className={s.form__item}>
            <span className={s.label}>Short description:</span>
            <input type="text" placeholder={""}/>
          </div>
          <div className={s.form__item}>
            <span className={s.label}>Long description:</span>
            <input type="text" placeholder={""} className={s.inpt}/>
          </div>
          <button onClick={() => {props.setShow()}}>
            <NavLink to={"/success"}>Send</NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Support
