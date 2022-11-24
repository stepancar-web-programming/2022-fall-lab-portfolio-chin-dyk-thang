import React from 'react'
import { useNavigate } from 'react-router-dom'

import './navbar.scss'


import logo from '../../assets/logo.png'
import { faHome , faAddressBook, faProjectDiagram, faMessage} from "@fortawesome/free-solid-svg-icons";
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
        name: 'Contact',
        icon: faMessage,
        path: '/contact'
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
                <img src={logo} alt='logo'></img>
                <div className='title'>Chin&apos;s portfolio</div>
            </div>


            <div className='items'>
                {navBarElement.map((item, key) => 
                    <div className='element' 
                    key={key} 
                    content={item.name}
                    onClick={() => navigate(item.path)}>
                        <FontAwesomeIcon icon={item.icon}  />    
                        
                        <div className='hide' >{item.name}</div>    
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar