import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import popcorn from '../../assets/Popcorn.png'
import hangman from '../../assets/hangman.png'
import social from '../../assets/social.jpeg'

import './projects.scss'

const projects = [
  {
    title: 'Popcorn',
    description: 'Movie Search and Rating system, which is built with ReactJs, ExpressJs. Responsive and beautiful interface. Popcorn website can help you out. It can list movies by actors and kinds of categories such as horror, romance, drama, action, thriller, etc. ',
    link: 'https://github.com/kaitouz/MoviePicker',
    img: popcorn
  }, 
  {
    title: 'Hangman Game',
    description: 'Hangman is a popular game for everyone, easily played on Telegram platform by directly interacting with chat bot. This project was built with Java and by using API provided by Telegram',
    link: 'https://github.com/ducthangchin/Telegram_bot_Game',
    img: hangman
  }, 
  {
    title: 'Only Friends',
    description: 'This Application inspired by Tik Tok, Facebook story, Youtube Shorts is a social platform where users can share their daily life photos, feelings and short videos. Unlike other platforms, this Application is going to be targeted more towards cinematic and cultural content. Technologies used are Java, Springboot and Thymeleaf.',
    link: 'https://github.com/ducthangchin/OnlyFriends',
    img: social
  }
]

const Projects = () => {

  return (
    <div className='projects'>

      <h1>My recent projects</h1>
      <div className='project-cards'>
        {projects.map((item, key) => 
          <div className='card' key={key}>
            <img src={item.img} alt={item.title}></img>
            <h2 className='title'>{item.title}</h2>
            <div className='description'>{item.description}</div>
            <div className='button' 
            href={item.link}
              onClick={() => window.open(item.link, '_blank')}
            ><FontAwesomeIcon icon={faGithub}/> Github</div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects