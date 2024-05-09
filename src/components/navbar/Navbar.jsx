import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link} from 'react-scroll';
import menu from '../../assets/menu-icon.png'

import logo from '../../assets/logo.png'
const Navbar = () => {
    const [sticky, setsticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setsticky(true) : setsticky(false)
        })
    }, [])
 
    const [mobilemune,setmobilemenu]=useState(false)
    const togglemenu =()=>{
        mobilemune ? setmobilemenu(false) : setmobilemenu(true)
    }
    return (
        <nav className={`container ${sticky ? 'darknav': ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobilemune?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}><p style={{color:'white'}}>Home</p></Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}><p style={{color:'white'}}>Program</p></Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}><p style={{color:'white'}}>About Us</p></Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}><p style={{color:'white'}}>Campus</p></Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}><p style={{color:'white'}}>Testimonial</p></Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
            </ul>
        <img src={menu} alt="" className='menu-icon'onClick={togglemenu}/>
        </nav>
    )
}

export default Navbar
