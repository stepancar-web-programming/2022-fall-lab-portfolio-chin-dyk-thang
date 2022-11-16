import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  } from '@fortawesome/free-regular-svg-icons'
import { faLaptopCode, faDumbbell  } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';
import axios from 'axios';

import reactLogo from '../../assets/react.png'
import nodejs from '../../assets/nodejs.png'
import springBoot from '../../assets/springboot.png'


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

  const [visit, setVisit] = useState(0)
  useEffect(() => {

    let URL = 'https://api.countapi.xyz/hit/tkhangio/ce70be5b-c43d-4243-ab47-48513f82a2fd'


    axios.get(URL).then(res => setVisit(res.data.value))
  }, [])


  return (
    <div className='home-pg'>
      <div className='home-container'>
        <div className='container'>
          <div className='intro'>
            <div className='m-name'>Duc Thang Trinh</div>
            <div className='slogan'>
              Dreams <img src={poke} alt='poke'/> <div>Goals</div>
            </div>
            <Typical
              steps={['Fullstack Developer', 3000, `Third-year student`, 3000, 'ITMO university', 3000]}
              loop={Infinity}
              wrapper="p"
            />

            <div className='page-count'>Visit count: {visit}</div>
          </div>
          <img className='gif' src='https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif' alt='gif'/>
        </div>
      </div>

      <div className='quick-intro'>
        <h1>For who I am</h1>
        <div className='container'>
          <div className='avt'>
            <img src={avatar} alt='avt'/>
            <div className='main-skills'>
              <img src={reactLogo} alt='react'/>
              <img src={nodejs} alt='nodejs'/>
              <img src={springBoot} alt='springboot'/>


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