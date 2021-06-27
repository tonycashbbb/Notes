import React from 'react'
import s from './News.module.css'
import {NavLink} from "react-router-dom";
import Catalog from "../Catalog/Catalog";

const News = () => {
  return (
    <main className={s.main}>

      <section className={s.navbar}>
        <ul className={s.nav}>
          <li><NavLink to={'#'}>Smart Phones</NavLink></li>
          <li><NavLink to={'#'}>Car Batteries</NavLink></li>
          <li><NavLink to={'#'}>Battery chargers</NavLink></li>
          <li><NavLink to={'#'}>Heaters</NavLink></li>
          <li><NavLink to={'#'}>Thermoses</NavLink></li>
          <li><NavLink to={'#'}>TVs</NavLink></li>
          <li><NavLink to={'#'}>Table lamps</NavLink></li>
          <li><NavLink to={'#'}>Cofee machines</NavLink></li>
          <li><NavLink to={'#'}>Office chairs</NavLink></li>
          <li><NavLink to={'#'}>Windscreen washers</NavLink></li>
          <li><NavLink to={'#'}>Wiper blades</NavLink></li>
          <li><NavLink to={'#'}>Games for PS</NavLink></li>
        </ul>
      </section>

      <section className={s.catalog}>
        <div className={s.section__title}>
          <NavLink to="/catalog">Catalog</NavLink>
        </div>

        <div className={s.row}>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/114e9cd3a1b5b5b89af91dac818463a7.jpeg"
                 alt="kek"/>
            <div className={s.item__suptitle}>Blenders</div>
            <div className={s.item__title}>Redmond RHB-2942</div>
            <div className={s.price}>35.99$</div>
          </div>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/6c9634f1ed141779f8daa26763db3797.jpeg"
                 alt="kek"/>
            <div className={s.item__suptitle}>Hair clipper</div>
            <div className={s.item__title}>Philips MG5735</div>
            <div className={s.price}>85.99$</div>
          </div>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/aaee3d84b1d1313fc15bea26b1e5f91d.jpg"
                 alt="kek"/>
            <div className={s.item__suptitle}>Auto compressor</div>
            <div className={s.item__title}>AVS Turbo KA 580</div>
            <div className={s.price}>12.99$</div>
          </div>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/b1ab6f7732bc36b07f461811db255a84.jpg"
                 alt="kek"/>
            <div className={s.item__suptitle}>Hair dryer</div>
            <div className={s.item__title}>Moser Ventus 4350-0050</div>
            <div className={s.price}>45.99$</div>
          </div>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/41f3611af01caa6b1335b6fe1f646028.png"
                 alt="kek"/>
            <div className={s.item__suptitle}>Blocks</div>
            <div className={s.item__title}>AeroCool Qs-240</div>
            <div className={s.price}>27.99$</div>
          </div>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/d392d049eaf94881baa36591253d70e9.jpeg"
                 alt="kek"/>
            <div className={s.item__suptitle}>Charger</div>
            <div className={s.item__title}>Apple 20W USB-C</div>
            <div className={s.price}>15.99$</div>
          </div>
          <div className={s.item}>
            <img src="https://content2.onliner.by/catalog/device/header/c6985cb2ac42e81dfbf23776495d1d7e.jpeg"
                 alt="kek"/>
            <div className={s.item__suptitle}>IP-camera</div>
            <div className={s.item__title}>Xiaomi Home Security Camera</div>
            <div className={s.price}>40.99$</div>
          </div>
        </div>

      </section>

      <section className={s.technologies}>
        <div className={s.section__title}>
          <NavLink to="#">technologies</NavLink>
        </div>

        <div className={s.row}>
          <div className={s.technologies__item}>
            <img src="https://content.onliner.by/news/main/33abbe292b77d67aa3287d266609fed6.jpeg" alt=""/>
            <div className={s.tech__title}>
              <NavLink to="#">Laser micromotors and televisions. What was developed in Belarus, but so far not very
                successful</NavLink>
            </div>
          </div>
          <div className={s.technologies__item__second}>
            <img src="https://content.onliner.by/news/submain/58ae9b7170d9297a5355b6d94d522c34.jpeg" alt=""/>
            <div className={s.techn__title}>
              <NavLink to="#">Xiaomi has released a robot cleaner that dumps collected dirt by itself</NavLink>
            </div>
            <div className={s.tech__text}>
              Xiaomi has released the Roidmi Self-collecting Robot Vacuum robot vacuum cleaner, which features an
              advanced LIDAR navigation system, as well as a docking station with a system for collecting dirt collected
              by the vacuum cleaner. After cleaning, the vacuum cleaner, connecting to the docking station, dumps dust
              into it into a tank with a capacity of three liters.
            </div>
          </div>
          <div className={s.technologies__item__second}>
            <img src="https://content.onliner.by/news/submain/129e1bf3e0fbaad406dfed6bbd922222.jpeg" alt=""/>
            <div className={s.techn__title}>
              <NavLink to="#">Firrstly were called the expensivest brands</NavLink>
            </div>
            <div className={s.tech__text}>
              What is the problem of Belarusian science and all these modern technologies? A retrospective analysis
              of news over the past 6-7 years shows that there are many achievements, many developments and
              interesting undertakings. The problem is that no one is involved in popularizing all this:
              suppose there are no funds for such activities.
            </div>
          </div>
        </div>
      </section>

      <section className={s.opinions}>
        <div className={s.section__title}>
          <NavLink to="#">opinions</NavLink>
        </div>

        <div className={s.row}>
          <div className={s.opinion__item}>
            <div className={s.opinion__title}>
              <NavLink to="/pl.quarantine">How is quarantine going in Poland?</NavLink>
            </div>
            <img src="https://content.onliner.by/news/550x298/b3114c03b8e4e9eae614003e2c820b40.jpeg" alt="kek"/>
          </div>
          <div className={s.opinion__item}>
            <div className={s.opinion__title}>
              <NavLink to="#">Unique belorussian economic way? We don't have one</NavLink>
            </div>
            <img src="https://content.onliner.by/news/550x298/bbb36e77ad64ffed096b389ce7c091b6.jpeg" alt="kek"/>
          </div>
          <div className={s.opinion__item}>
            <div className={s.opinion__title}>
              <NavLink to="#">Trump about fake democracy</NavLink>
            </div>
            <img src="https://content.onliner.by/news/550x298/0e31d72ae5b05487992d71135b315123.jpeg" alt="kek"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default News
