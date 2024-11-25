import React from "react";

import './CardRow.scss'

function CardRow () {

  return(
    <div className="card-row">
      <div className="mow-htk row__style">MOW - HTK</div>
      <div className="on-the-way row__style">В ПУТИ</div>
      <div className="transfers row__style">2 ПЕРЕСАДКИ</div>

      <div className="time-mow-htk row__style-1">10:45 - 08:00</div>
      <div className="time-on-the-way row__style-1">21ч 15м</div>
      <div className="cities row__style-1">HKG, JNB</div>
        
    </div>
  )
}

export default CardRow