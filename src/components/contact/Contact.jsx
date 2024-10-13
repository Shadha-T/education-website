import React from 'react'
import './contact.css'
import img from '../../assets/pharmacy-.jpg'
import img2 from '../../assets/pharmacy-.jpg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="cnt-cl">
            <h3>send us a message <i class="fa-solid fa-envelope"></i></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sunt maxime illo ratione doloremque explicabo animi beatae laudantium porro, adipisci soluta debitis pariatur, dolor dolores, ducimus temporibus tempora fuga quas!</p>
            <ul>
                <li> <i class="fa-regular fa-envelope-open"></i>abx@gmail.com</li>
                <li><i class="fa-solid fa-phone"></i>0987654321</li>
                <li> <i class="fa-solid fa-location-dot"></i>usa florida</li>
            </ul>
        </div>
      <div className='cnt-cl'>
   <form>
    <label>your name</label>
    <input type='text' name='name' placeholder='Enter Your Name' required/>
    <label>Phone Number</label>
    <input type='tel' name='phone' placeholder='Enter Your Phone Number' required/>
    <label>write your meassage</label>
    <textarea name='message' required  rows="5" placeholder='Enter Your Message'/>

    <button type='submit' className='btn1 dark-btn1'>Submit<i class="fa-solid fa-arrow-right"></i></button>
   </form>
  {/* <span>sending</span> */}
      </div>
    </div>
  )
}

export default Contact