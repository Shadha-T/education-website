import React from 'react'
import './abt.css'
import img1 from '../../assets/graduation.webp'
import img2 from '../../assets/skin care.webp'

function Abt() {
  return (
    <div className='abt'>
        <div className="abt-lft">
        < img src={img1} alt='' className='img1'/>
        {/* <img src={img2} alt='' className='img2'/> */}
        </div>
         <div className="abt-rgt">
            <h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Knowledge for a Brighter Tomorrow.... </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quidem, repellat autem pariatur aperiam commodi harum cum culpa suscipit illo excepturi facilis assumenda. Incidunt voluptatum non nemo quo voluptatibus quisquam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, quaerat? Non nulla odit sit porro eos ducimus expedita obcaecati laborum, veritatis tempore vero accusamus aliquid, magni laboriosam excepturi quaerat dignissimos?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, autem placeat! Aspernatur, assumenda quod ullam, quae repudiandae deleniti impedit ea voluptatum possimus vel minus eius facilis. Consequatur, iure suscipit. Doloremque!</p>
         </div>
      
    </div>
  )
}

export default Abt