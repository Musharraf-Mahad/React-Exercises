import React, { useContext } from 'react'
import CartContext from './CartContext';

const CartSummary = () => {

    const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
    <h2>Cart Summary</h2>
    <p>Total Items: {cart.length}</p>
        <ul>
            { cart.map((item)=>(
                <li key={item.id}>
                {item.name} - {item.price}{' '}
                <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    </>
  );
}

export default CartSummary