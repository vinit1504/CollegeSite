import React from 'react'
import './Program.css'
import Program1 from '../../assets/program-1.png'
import Program2 from '../../assets/program-2.png'
import Program3 from '../../assets/program-3.png'
import Program_icon_1 from '../../assets/program-icon-1.png'
import Program_icon_2 from '../../assets/program-icon-2.png'
import Program_icon_3 from '../../assets/program-icon-3.png'

const Program = () => {
    return (
        <div className='programs' id='programs'>
            <div className="program">
                <img src={Program1} alt="" />
                <div className="caption">
                    <img src={Program_icon_1} alt="" />
                    <p>Gradution Gegree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program2} alt="" />
                <div className="caption">
                    <img src={Program_icon_2} alt="" />
                    <p>Master Gegree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program3} alt="" />
                <div className="caption">
                    <img src={Program_icon_3} alt="" />
                    <p>P0st Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Program
