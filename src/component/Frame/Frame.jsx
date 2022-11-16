import React from 'react'

import './frame.scss'

const Frame = (props) => {
  return (
    <div className='frame'>
        <img src={props.img} alt='frame-img'></img>

    </div>
  )
}

export default Frame