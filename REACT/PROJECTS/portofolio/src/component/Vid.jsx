import React from 'react'

import vid from '../assets/vid/Video.mp4'


export const Vid = () => {

  return (
    <div aria-hidden="true">
      <video loop autoPlay muted playsInline className='vid'>
        <source src={vid} type='video/mp4' />
      </video>
    </div>
  )
}
