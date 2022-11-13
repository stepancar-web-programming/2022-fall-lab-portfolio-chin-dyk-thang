import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faStar,  } from '@fortawesome/free-regular-svg-icons'
import { faLaptopCode, faDumbbell  } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";

import './home.scss'


import poke from '../../assets/poke.png'
import avatar from '../../assets/avatar.jpeg'


const Home = () => {
  return (
    <div className='home-pg'>
      <div className='home-container'>
        <div className='container' onLoad={() => console.log('load')}>
          <div className='intro'>
            <div className='m-name'>Duc Thang Trinh</div>
            <div className='slogan'>
              Dreams <img src={poke} /> <div>Goals</div>
            </div>
            <Typical
              steps={['Fullstack Developer', 3000, `Third-year student`, 3000, 'ITMO university', 3000]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <img src='https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif' />
        </div>
      </div>
      <div className='quick-intro'>
        <h1>For who I am</h1>
        <div className='container'>
          <div className='avt'>
            <img src={avatar}/>
            <div className='main-skills'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png'/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzDN8dSv_qnT93HbfpKNp4utOJTeM9b5zZQlu7f5j&s'/>


            </div>
          </div>
          <div className='quote-box'>
            <p>I have a great interest in Web development. <FontAwesomeIcon icon={faLaptopCode}/></p>
            <p><FontAwesomeIcon icon={faStar}/>I am passionate with tackling hard problems.</p> 
            <p>Coding is my daily cardio.<FontAwesomeIcon icon={faDumbbell}/></p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Home