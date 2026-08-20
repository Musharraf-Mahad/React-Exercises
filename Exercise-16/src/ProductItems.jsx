import React, { useContext } from 'react'
import CartContext from './CartContext'

const ProductItems = ({itemId, itemName, price}) => {

    const { addToCart } = useContext(CartContext);

    const handleAdd = () => {
        addToCart({id: itemId, name: itemName, price});
    }

  return (
    <div>
    <p>{itemName}</p>
    <p>price: ${price}</p>
    <button onClick={handleAdd}>Add to Cart</button>
    </div>
  )
}

export default ProductItems