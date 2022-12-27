import React from 'react'
import "./cart.css"

const Cart = ({changePage, cart}) => {
  return (
    <div className='cart'>
    <div>
        {cart.map((p) => 
         <section key={p.id}>
            <div>{p.oldP}</div>
         </section>   
            )}
    </div>
    </div>
  )
} 

export default Cart