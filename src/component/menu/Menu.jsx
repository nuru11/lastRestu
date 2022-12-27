import React from 'react'
import "./menu.css"

import MenuData from '../../MenuData'
import MenujuiceData from '../../MenujuiceData'

const Menu = ({changePage, handleClick}) => {
  return (
    <div id='menu' className='menu'>
        <div className='menu-item'>
            <h className="menu-title">menu</h>
            <div className="menu-ul-parent">
            <div className='ul-food'> 
              <h className="food-title">food menu</h>
                <ul className='menu-food-list'>
             {MenuData.map((item) => (
              <section key={item.id} >
          
         <li className='menu-food-li'><div className='food-img2-parent'>
            <img className='menu-img1' src={item.img} alt="" />
            </div><div className='li-item'><h className="menu-name"><span className="menu-name-text">name:</span>
            <span className='menu-name-span'>{item.name}</span></h>
            <h className="menu-price"><span className='menu-price-text'>price:</span>
            <span className='menu-price-span'>${item.newP}</span></h> 
            <button onClick={() => handleClick(item)} className='menu-btn'>order now</button></div></li>
                
              </section>
             ))}
                </ul>
            </div>
            <div className='ul-juice'>
              <h className="juice-title">juice menu</h>
            <ul className='menu-juice-list'>
              {MenujuiceData.map((n) => 
            <section key={n.id}>
            <li className='menu-juice-li'><div className='juice-img-parent'>
            <img className='menu-img1' src={n.img} alt="" /></div>
            <div className='li-item'><h className="menu-name"><span className="menu-name-text">name:</span>
            <span className='menu-name-span'>burger</span></h><h className="menu-price"><span className='menu-price-text'>price:</span>
            <span className='menu-price-span'>${n.price}</span></h> 
            <button onClick={() => handleClick(n)} className='menu-btn'>order now</button></div></li>
            </section>
              )}
                </ul>
               
               
            </div>


            </div>
            <button onClick={changePage} className='menu-bascket'>go to bascket</button>
        </div>
       </div>
  )
}

export default Menu