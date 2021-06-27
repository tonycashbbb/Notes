import React from 'react'
import s from './Login.module.css'
import {NavLink} from "react-router-dom";

const Login = (props) => {
  return (
    <div className={s.login}>
      <div className={s.form}>
        <div className={s.ztitle}>Offliner</div>
        <div className={s.box}>
          <h2 className={s.log}>Log in</h2>
          <div className={s.inputs}>
            <input type="text" placeholder={"E-mail"}/>
            <input type="text" placeholder={"Password"}/>
            <div className={s.link}>
              <button onClick={() => {props.setShow()}}>
                <NavLink to={"/"}>Log in</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
