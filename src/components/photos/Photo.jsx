import React from 'react'
import './photo.css'
import grid1 from '../../assets/g1.png'
import grid2 from '../../assets/g2.png'
import grid3 from '../../assets/g3.png'
import grid4 from '../../assets/g4.png'


const Photo = () => {
  return (
    <div className='photo'>
        <div className='grid'>
            <img src={grid1} alt=""/>
            <img src={grid2} alt=""/>
            <img src={grid3} alt=""/>

            <img src={grid4} alt=""/>



        </div>
   
<button className='btn1 dark-btn1'>show more <i class="fa-solid fa-arrow-right"></i></button>
      
    </div>
  )
}

export default Photo
