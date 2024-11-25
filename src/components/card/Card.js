import React from "react";

import './Card.scss';
import { formatDuration, formatTime } from './FormatTime'



function Card ({ data }) {
  const { price, carrier, segments } = data

  const logoUrl = `https://pics.avs.io/99/36/${carrier}.png`

  const [outboundSegment, returnSegment] = segments

  const stopsInfo = (stops) => {
    if (stops.length === 0) return ' '
    return stops.join(', ')
  }

  const stopsCountText = (stops) => {
    if (stops.length === 0) return '0 пересадок'
    return `${stops.length} ${stops.length === 1 ? 'пересадка' : 'пересадки'}`
  }


  return(
    <div className="card"> 


      

      <div className="card-header">
        <div className="price">{price.toLocaleString('ru-RU')} Р</div>
        <div className="brend">
          <img src={logoUrl} alt="brend"></img>
        </div>
      </div>
      
      
      <div className="card-row-there">
        
        <div className='mow-htk row__style'>
          {outboundSegment.origin} – {outboundSegment.destination}
        </div>
          
        <div className='time-mow-htk row__style-1'>
          {formatTime(outboundSegment.date)} –{' '}
          {formatTime(new Date(new Date(outboundSegment.date).getTime() + outboundSegment.duration * 60000))}
        </div>

        <div className='on-the-way row__style'>В пути</div>
        <div className='transfers row__style'>{stopsCountText(outboundSegment.stops)}</div>
        <div className='cities row__style-1'>{stopsInfo(outboundSegment.stops)}</div>
        <div className='time-on-the-way row__style-1'>{formatDuration(outboundSegment.duration)}</div>

      </div>



      <div className="card-row-back">
        
        <div className='mow-htk-back row__style'>
          {returnSegment.origin} – {returnSegment.destination}
        </div>

        <div className='time-mow-htk-back row__style-1'>
          {formatTime(returnSegment.date)} –{' '}
          {formatTime(new Date(new Date(returnSegment.date).getTime() + returnSegment.duration * 60000))}
        </div>
             
        <div className='on-the-way-back row__style'>В пути</div>
        <div className='transfers-back row__style'>{stopsCountText(returnSegment.stops)}</div>
        <div className='cities-back row__style-1'>{stopsInfo(returnSegment.stops)}</div>
        <div className='time-on-the-way-back row__style-1'>{formatDuration(returnSegment.duration)}</div>     
        
      </div>

    </div>
  
  )
}

export default Card