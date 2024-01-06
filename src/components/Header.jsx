import React from 'react'
import 
 {BsFillBellFill, BsJustify}
 from 'react-icons/bs'
 import '../Style/Header.css'
import icon from '../assets/pro.jpeg'
function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' />
        </div>
        <div className='header-left'>
  
            <h1>Dashbord</h1>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
          
           <span className='span'>Wallet Balance </span>
           
            
            <span className='spam'> <img src={icon} alt="" className='icon-img' /></span>
            
        </div>
    </header>
  )
}

export default Header