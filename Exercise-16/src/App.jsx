import React, { useState } from 'react'
import CartContext from './CartContext'
import ProductItems from './ProductItems'
import CartSummary from './CartSummary'

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item)=> item.id !== itemId));
  }

  const value = {cart, addToCart, removeFromCart};

  return (
    <CartContext.Provider value={value}>
      <ProductItems itemId={1} itemName="Widget" price={19.99} />
      <ProductItems itemId={2} itemName="Gadget" price={29.99} />
      <CartSummary />
    
    </CartContext.Provider>
  )
}

export default App