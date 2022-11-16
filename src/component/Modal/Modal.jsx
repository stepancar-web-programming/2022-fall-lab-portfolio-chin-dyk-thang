import React from 'react'
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

export default Modal