import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/graduation-png.png'
import { Link } from 'react-scroll'; 


function Navbar() {
  const[sticky,setSticky] = useState(false)
  useEffect(()=>{
window.addEventListener('scroll',()=>{
  window.scrollY>500 ?setSticky(true):setSticky(false)
})
  },[])

  const [mobileMenu,setMobileMenu]= useState(false)

  const toggleMenu = ()=>{
mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }
  return (
   <nav className={`container ${sticky? 'dark-nav' : ""}`} >
    <img src={logo} alt='' className="logo"/>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li> <Link to='Main' smooth = {true} offset={0} duration ={500} >Home</Link></li>
        <li><Link to='Program' smooth = {true} offset={-260} duration ={500} >Programmes</Link></li>
        <li><Link to='Abt' smooth = {true} offset={-150} duration ={500} >About Us</Link></li>
        <li><Link to='Photo' smooth = {true} offset={-260} duration ={500} >Campus</Link></li>
        <li><Link to='Test' smooth = {true} offset={-260} duration ={500} >Testimonials</Link></li>
        <li><Link to='Contact' smooth = {true} offset={-260} duration ={500} >Contact Us</Link> </li>
    </ul>
    <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
   </nav>
  )
}
<i class="fa-solid "></i>
export default Navbar