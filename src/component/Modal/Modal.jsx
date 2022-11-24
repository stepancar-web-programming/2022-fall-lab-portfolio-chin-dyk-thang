import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons'

import './modal.scss'

const Modal = (props) => {
  return (
    <div className='modal'>
        <div className='btn' onClick={props.modalOnClose}>
            <FontAwesomeIcon icon={faRectangleXmark}/>
        </div>
        <iframe
              src={props.videoURL}
              title='youtube embed'
              border='0'
        ></iframe>
    </div>
  )
}

Modal.propTypes = {
  modalOnClose: PropTypes.func,
  videoURL: PropTypes.string
}

export default Modal