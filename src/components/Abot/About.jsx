import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplaystate}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setplaystate(true)}}/>
            </div>
            <div className="about-right"><h3>About University</h3>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quis quas eos rem voluptas!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium exercitationem</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique ullam voluptatum!</p></div>
            
        </div>
    )
}

export default About
