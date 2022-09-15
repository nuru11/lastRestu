// rafce
import "./index.css"

import React, {useState} from 'react'

import Header from "./component/header/Header"
import Body from "./component/main-content/Body"
import Footer from "./component/footer/Footer"
import Plate from "./component/plate/Plate"
import Menu from "./component/menu/Menu"
import Nav from "./component/nav/Nav"
import About from "./component/about/About"
import Testimonial from "./component/testimonial/Testimonial"
import Parent from "./component/Parent"
import Basket from "./component/bascket/Basket"
import Cart from "./component/cart/Cart"



const App = () => {
  const [show, setShow] = useState(true)

  function changePage(){
    setShow(!show)
  }

 const [cart, setCart] = useState([])

const handleClick = (p) => {
  if (cart.indexOf(p) !== -1) return;
  setCart([...cart, p]);

  alert("your order have successfully added to the basket")
  
};
/*
const handleChange = (item, d) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};*/

const handleChange = (item, d) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr]);
};

  return (
    <>
  {show ?
<div>  <Nav />
    <Header changePage={changePage} show={show} handleClick={handleClick}/>
    <Body />
    <Parent handleClick={handleClick} cart={cart} />
    <About />
    <Menu cart={cart} setCart={setCart} changePage={changePage} handleClick={handleClick}/>
    <Testimonial />
    <Footer /> </div> : <div> <Basket handleChange={handleChange} changePage={changePage} cart={cart} setCart={setCart}/> </div>}
        </>
  )
}


export default App




