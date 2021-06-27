import React from 'react'
import s from './Vacancies.module.css'
import {NavLink} from "react-router-dom";

import photo from './photo.png'

const Vacancies = () => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <h1 className={s.qwq}>Vacancies</h1>

        <ul className={s.list}>
          <h2>Why should IT specialists work with Offliner?</h2>
          <li>— Offliner is one of the largest resources in Poland. Working here is a great way to “pump”
            your experience in conditions of increased responsibility: the site is visited by about 700 thousand
            people every day and if something goes wrong, hundreds of thousands will notice.</li>
          <li>— We are doing only one project — the Offliner.pl website. No overseas customers.
            No crazy customer project managers or California time zone work.</li>
          <li>— A rare opportunity for the IT world to instantly see the result of your work and immediately
            receive feedback from real users. Pride for the work done!</li>
          <li>— The work of the IT department takes place within the framework of a pre-approved strategy. No "ah-ah,
            urgently, immediately, it was necessary yesterday", no convulsive throwing, no changes in requirements
            a week before the project was delivered.</li>
          <li>— We make significant efforts to implement simple, clear and transparent methods of organizing the
            development process. Employees know what to do and are not stressed by constant organizational chaos.</li>
          <li>— Non-IT management does not interfere with the day-to-day work of the department.</li>
        </ul>

        <ul className={s.wouldlike}>
          <h2>We would like to cooperate:</h2>
          <li>Senior PHP Developer</li>
          <li>IOS Developer</li>
          <li>Android Developer</li>
          <li>Front-end Developer</li>
          <li>QA Engineer (mobile)</li>
        </ul>

        <div className={s.contacts}>
          <h2>Contacts for communication:</h2>
          <p>Please send information to Kinga at <b>kl@onliner.by</b></p>
          <p>We will definitely contact you if the information interests us.</p>
          <p>Good luck!</p>
          <img src={photo} alt="q"/>
        </div>
      </div>
    </div>
  )
}

export default Vacancies
