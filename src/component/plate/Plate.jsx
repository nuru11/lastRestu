import React from 'react'
import "./plate.css"



import PlateData from '../../PlateData'

const Plate = ({p, handleClick}) => {
  const {name, img, newP, oldP, discont} = p
  return (
   
    <div className='plate-parent'>
  <div className='plate-item-parent' >
     <img className='plate-img' src={img} alt="" />
     <h3 className="plate-name">{name}</h3>
     <p className='about-plate'>old Price: {oldP}</p>
     <h className="plate-price">new price: {newP}</h>
     <button onClick={() => handleClick(p)}  className='buy-btn'>take it</button>
      </div>
      </div>
      
      
  )
}

export default Plate