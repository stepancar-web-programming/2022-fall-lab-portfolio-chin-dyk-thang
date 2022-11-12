import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'


import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
