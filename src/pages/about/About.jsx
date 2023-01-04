import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faPlay } from '@fortawesome/free-solid-svg-icons'

import Modal from '../../component/Modal/Modal'


import dev from '../../assets/dev.png'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import bootstrap from '../../assets/bootstrap.png'
import reactLogo from '../../assets/react.png'
import sass from '../../assets/sass.png'

import nodejs from '../../assets/nodejs.png'
import expressjs from '../../assets/expressjs.png'
import springboot from '../../assets/springboot.png'
import thymeleaf from '../../assets/thymeleaf.png'

import java from '../../assets/java.jpg'
import cc from '../../assets/cc++.png'
import python from '../../assets/python.png'

import photoshop from '../../assets/photoshop.png'
import afterEffect from '../../assets/afterEffect.png'
import premiere from '../../assets/premiere.png'
import figma from '../../assets/figma.png'

import './about.scss'
import Frame from '../../component/Frame/Frame'

const About = () => {
  
  const youtubeEmbed = useRef(null)

  const playMusic = () => {

    youtubeEmbed.current.classList.add('active')
    console.log('active')
    
  }

  const closeVideo = () => {
    youtubeEmbed.current.classList.remove('active')
  }

  return (
    <div className='about-pg'>
      <div className='basic-info'>
        <div className='info'>
          <img src={dev} alt='dev'></img>
          <div className='text-info'>
            <h1>Get to know about me</h1>
            <div>Full name: Trinh Duc Thang</div>
            <div>Country: Vietnam</div>
            <div>Languages: Vietnamese, English, Russian</div>
            <div>Third-year student at ITMO university</div>
            <div>I major in software development. I am also curious about web 3 and blockchain stuffs.</div>
          </div>
        </div>

        <div className='video-responsive'>
          <h2>This is the song that keeps me movitated for life. <FontAwesomeIcon icon={faHeadphones}/></h2>
          <div className='play-btn'>
            <FontAwesomeIcon icon={faPlay} onClick={playMusic} />
          </div>

          <div ref={youtubeEmbed} className="video">
            <Modal  videoURL='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' modalOnClose={closeVideo}></Modal>
          </div>
          
        </div>
      </div>

      <div className='skills'>
        <h1>Skills and techniques</h1>
        <div className='area'>
          <h2>Front-end/Design</h2> 
          <div className='area_skills'>
            {[html, css, sass, javascript, bootstrap, reactLogo].map((item, key) =>
              <Frame img={item} key={key} />
            )}
          </div>
        </div>

        <div className='area'>
          <h2>Backend</h2>
          <div className='area_skills'>
            {[springboot, thymeleaf, nodejs, expressjs].map((item, key) =>
              <Frame img={item} key={key} />
            )}
          </div>
        </div>

        <div className='area'>
          <h2>Programming Languages</h2>
          <div className='area_skills'>
            {[java, cc, python].map((item, key) =>
              <Frame img={item} key={key} />
            )}
          </div>
        </div>

        <div className='area'>
          <h2>Multimedia</h2>
          <div className='area_skills'>
            {[figma, photoshop, afterEffect, premiere].map((item, key) =>
              <Frame img={item} key={key} />
            )}
          </div>
        </div>

      


      </div>
    
      
    </div>
  )
}

export default About