import React, {useEffect} from 'react'
import "./basket.css"

import Header from "../header/Header"
import Footer from "../footer/Footer"
import { useState } from 'react'
 
const Basket = ({changePage, cart,setCart, handleChange}) => {

  const [price, setPrice] = useState(0);
  
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  }; 

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className='basket'>
      <Header changePage={changePage}/>
      <h className="basket-title">Your Bascket</h>
    <div>
    {cart.map((p) => 
         <section key={p.id}>
    <ul className="basket-ul">
  <li className="basket-li-img"><img src={p.img} /></li>
  <li className='basket-li-name'><span className='basket-span-name'>name: </span>{p.name}</li>
  <li className='basket-li-newp'><span className="basket-span-newp">price: </span>${p.newP}</li>
  <li className="addMinus-li-btn">
  <button onClick={() => handleChange(p, -1)} className="li-minus-btn">-</button>
  <div className="basket-li-amount">{p.amount}</div>
  <button onClick={() => handleChange(p, 1)} className="li-add-btn">+</button></li>
  <div className="basket-btn-li-parent"><li>
  <button onClick={() => handleRemove(p.id)} className="basket-remove-btn">remove</button></li>
  <li><button className="basket-li-btn">order now</button></li></div>
        </ul>
         </section>   
            )}
    </div>
    <div className="basket-btn-parent">
    {price === 0 ? <div className='basket-noProduct'>you havent added any product!</div> : <div className="basket-totalPrice">total price: {price}</div>}
      <button className="basket-home-btn" onClick={changePage}>Home</button></div>
    <div className='basket-footer'><Footer /></div>
    </div>
  )
}

export default Basket