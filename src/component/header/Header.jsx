import React from 'react'
import "./header.css"

import {MdFoodBank} from "react-icons/md"

function Header({changePage, show}) {
  return (
    <header id="header" className="header-parent">
     <div className='item-parent'> 
     <div className="welcome"><MdFoodBank/></div>
     <a className='a-header-menu' href="#menu" ><div className='header-menu'>menu</div></a>
    <a className='a-header-about' href="#about" ><div className='header-about'>about</div></a>
    <a className='a-header-contact' href='#contact'> <div className='header-contact'>contact</div></a>
     <a className='a-header-contact' href='#contact' ><div className='call-us'>call us: <span className='header-number'>093848392</span></div></a>
     <button onClick={changePage} className="header-basket">{show ? "bascket" : "back home"}</button>
     </div>
    </header>
  )
}

export default Header