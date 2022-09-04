import React from 'react'
import "./nav.css"

import {useState} from "react"

import {AiTwotoneHome} from "react-icons/ai"
import {GiMeal} from "react-icons/gi"
import {BsFilePersonFill} from "react-icons/bs"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdMenuBook} from "react-icons/md"

const Nav = () => {

 const s = window.addEventListener("scroll", () => {
    return "klsfjkl"
  })

  const [activeNav, setActiveNav] = useState("#header")
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav("#header")} className={activeNav == "#header" ? "active" : ""}><AiTwotoneHome/></a>
      <a href="#palte" onClick={() => setActiveNav("#plate")} className={activeNav == "#plate" ? "active" : ""}><GiMeal/></a>
      <a href="#menu" onClick={() => setActiveNav("#menu")} className={activeNav == "#menu" ? "active" : ""}><MdMenuBook/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav == "#about" ? "active" : ""}><BsFilePersonFill/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav == "#contact" ? "active" : ""}><BsFillTelephoneFill/></a>
     
      
      <div>{s}</div>
    </nav>
    
  )
}

export default Nav