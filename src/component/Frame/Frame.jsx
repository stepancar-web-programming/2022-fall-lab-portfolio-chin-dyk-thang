import React from 'react'
import PropsTypes from 'prop-types'

import './frame.scss'

const Frame = (props) => {
  return (
    <div className='frame'>
        <img src={props.img} alt='frame-img'></img>
    </div>
  )
}

Frame.propTypes = {
  img: PropsTypes.string
}

export default Frame