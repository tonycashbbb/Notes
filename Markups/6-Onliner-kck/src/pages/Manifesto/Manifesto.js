import React from 'react'
import s from './Manifesto.module.css'
import {NavLink} from "react-router-dom";

import photo from './photo.png'

const Manifesto = () => {
  return (
    <div className={s.about}>
      <div className={s.container}>
        <h1 className={s.h1}>Manifesto</h1>
        <p className={s.qq}>Our goal is to provide readers with the most complete, unbiased and accurate information about the
          technology, as well as help buyers find the best models at the lowest prices. We try to make the
          process of selling and buying goods, ordering services as comfortable as possible, and in our news
          policy we are guided by the standards of honest and unbiased journalism.</p>

        <div className={s.subtitle}>
          <h3>Editorial policy</h3>
        </div>
        <p className={s.qq}>Articles and news of the site Onliner.by reflect only the author's point of view. We are ready to write
          completely free of charge and in the most complete form about news stories of companies and organizations,
          if these news events are interesting and important for readers.</p>
        <p className={s.qq}>We believe that advertising materials published without appropriate labeling are unworthy of being called
          "PR" and only disgust the target audience. Commercial options for placing information in the news feed under
          the guise of hidden advertising on offliner.pl are excluded.</p>
        <p className={s.qq}>We are confident that in any self-respecting publication, a wall must grow between the commercial and
          editorial departments, which not a single dollar can break through. We ignore threats to
          remove ads because of sharp material.</p>

        <div className={s.subtitle}>
          <h3>Catalog</h3>
        </div>
        <p className={s.qq}>We make every effort to make the catalog of equipment as accurate, detailed and convenient for buyers as possible.</p>
        <p className={s.qq}>We emphasize our commitment to quality by meticulously processing model photos and carefully checking technical data. This is done manually to ensure the greatest possible completeness and accuracy. We are in no way affiliated with equipment manufacturers, and they do not influence the ratings. All ratings are based on the real interest of buyers.</p>
        <p className={s.qq}>We constantly monitor unscrupulous sellers and disconnect them from the service, even if it goes against our financial interests.</p>
        <p className={s.qq}>We strive to promote sellers who offer the best service and relevant information, as well as ensure their warranty obligations.</p>
        <p className={s.qq}>Feedback from users of equipment and customer reviews about sellers are carefully processed manually, which allows us to make the information as reliable as possible and avoid unfair "cheats". Sellers cannot influence the decision to post or withdraw a review. Our task is to give the buyer as much information as possible so that he makes the right choice.</p>

        <div className={s.subtitle}>
          <h3>Services</h3>
        </div>
        <p className={s.qq}>We have created Services to help you quickly find a contractor for your order by comparing many offers and making a profitable choice.</p>
        <p className={s.qq}>When developing the service, we were guided by the logic of the customer, not the executor. After placing an order, your phone will not heat up from the calls of rude characters - you yourself will choose the artist with the best offer.</p>
        <p className={s.qq}>The mechanics of the service prevents the creation of price collusion, and the information and documents of the performers are carefully checked by the moderators. Using the Services, you can be sure that your contractor is a real person: individual entrepreneur, legal entity or individual.</p>
        <p className={s.qq}>Every review on the Services is reviewed by our team of moderators. You can leave a review for the contractor only if the order was actually made through our website.</p>
      </div>
    </div>
  )
}

export default Manifesto
