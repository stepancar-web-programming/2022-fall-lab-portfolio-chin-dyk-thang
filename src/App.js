import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'


import './app.scss';

import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
{/* 
        <Footer></Footer> */}
      </BrowserRouter>

      
    </div>
  );
}

export default App;
