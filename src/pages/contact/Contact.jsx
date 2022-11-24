import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedin, faWhatsapp, faTelegram, } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import './contact.scss'

const socialNetworks = [

  {
    logo: faGithub,
    name: 'Github',
    link: 'https://github.com/ducthangchin'
  },
  {
    logo: faFacebook,
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100010330291896'
  },
  {
    logo: faLinkedin,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/feed/'
  },
  {
    logo: faTelegram,
    name: 'Telegram',
    link: 'https://web.telegram.org/'
  },
  {
    logo: faWhatsapp, 
    name: 'Whatsapp',
    link: 'https://www.whatsapp.com/'
  }
  
  
]

const sendMessage = event => {
  const msgForm = document.getElementById('msg-form')
  const notification = document.getElementById('succ-notif')
  if (msgForm.checkValidity()) {
    event.preventDefault()
    msgForm.classList.add('hide')
    notification.classList.remove('hide')
  }
}

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Connect me on</h1>
      <div className='social-link'>
        {socialNetworks.map((item, key) => 
        <div className={item.name.toLocaleLowerCase()}
            name={item.name}
            key={key}
            onClick={() => window.open(item.link, '_blank')}>
          <FontAwesomeIcon icon={item.logo} key={key}/>
        </div>)}
      </div>

      <div className='email'>
        <h1>Or leave me a message</h1>
        <form id='msg-form'>
            <input className='field' type='email' placeholder='Email*' required='true'/>
            <input className='field' type='text' placeholder='Title*' required='true'/>
            <textarea className='field' type='text' placeholder='Write message...' required='true'/>

            <button type='submit' onClick={sendMessage}> <FontAwesomeIcon icon={faPaperPlane}/> Send</button>
        </form>

        <div id='succ-notif' className='notification hide'>
          Thank you for sending me. We will try to response as soon as possible. 
        </div>
      </div>
    </div>
  )
}

export default Contact