import React from 'react'
import './Hero.css'
import darkarrow from'../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="herotext">
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, iusto vitae iste sequi corrupti quis.</p>
            <button className="btn">Explore More <img src={darkarrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
