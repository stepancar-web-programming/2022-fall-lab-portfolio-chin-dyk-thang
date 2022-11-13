import React from 'react'
import { useNavigate } from 'react-router-dom'

import './navbar.scss'


import logo from '../../assets/logo.png'
import { faHome, faFile , faAddressBook, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from 'react';
import { useRef } from 'react';



const navBarElement = [
    {
        name: 'Home',
        icon: faHome,
        path: '/'
    },
    {
        name: 'About',
        icon: faAddressBook,
        path: '/about'
    },
    {
        name: 'Projects',
        icon: faProjectDiagram,
        path: '/projects'
    },
    {
        name: 'Resume',
        icon: faFile,  
        path: '/resume'
    }
]

const Navbar = () => {

    const navigate = useNavigate()
    const headerRef = useRef(null)
    
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll', shrinkHeader)
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, [])

    return (
        <div ref={headerRef} className='nav-bar'>
            <div className='logo' onClick={() => navigate('/')}>
                <img src={logo}></img>
                <div className='title'>Chin blog</div>
            </div>

            <div className='items'>
                {navBarElement.map((item, key) => 
                    <div className='element' key={key} onClick={() => navigate(item.path)}>
                        <FontAwesomeIcon icon={item.icon} />    
                        
                        <div>{item.name}</div>    
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar