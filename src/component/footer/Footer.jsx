import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div>Copyright © ducthangchin</div>
      <div href='https://github.com' className='social-link'>
        <FontAwesomeIcon icon={faGithub}/>
      </div>
    </div>
  )
}

export default Footer