import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg';
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
const Header = () => {
  const cartCtx=useContext(CartContext);

  const totalCartItems=cartCtx.items.reduce(
    (totalItems,item)=>{
         return totalItems+item.quantity; 
    },
    0
  )
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="A restaurant" />
            <h1>QuickBite</h1>
        </div>
        <nav>
           <Button textOnly >Cart ({totalCartItems})</Button>
        </nav>
    </header>
  )
}

export default Header