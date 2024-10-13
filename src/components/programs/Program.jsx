import React from 'react'
import './Program.css'
import Pg1 from '../../assets/university4.png'
import Pg2 from '../../assets/university5.png'
import Pg3 from '../../assets/university3.png'


const Program = () => {
  return (
    <div className='pgms'>
        <div className='pgm'>
            <img src={Pg1} alt=''/>
            <div className='caption'>
            <i class="fa-solid fa-arrow-right"></i>
                <p>Graduation degree</p>
            </div>
        </div>
        <div className='pgm'>
            <img src={Pg2} alt=''/>
            <div className='caption'>
            <i class="fa-solid fa-arrow-right"></i>
                <p>Masters degree</p>
            </div>
        </div>
        <div className='pgm'>
            <img src={Pg3} alt=''/>
            <div className='caption'>
            <i class="fa-solid fa-arrow-right"></i>
                <p>Fellowship</p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
