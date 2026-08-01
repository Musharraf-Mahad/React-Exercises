import { useState } from "react";
const Shopping = () => {
  const [products, setProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddToProduct = () => {
    if (productName.trim() !== "" && price.trim() !== "") {
      const newProduct = {
        id: crypto.randomUUID(),
        name: productName,
        price: parseFloat(price),
        quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setPrice("");
    }
  };

  const handleRemoveButton = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  const increaseQuantity = (id) => {
    const updatedProducts = products.map(product => (
      product.id === id ? {...product, quantity: product.quantity + 1 } : product
    ))
    setProducts(updatedProducts);
  }

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map(product => (
      product.id === id && product.quantity > 1 ? {...product, quantity: product.quantity - 1} : product
    ))
    setProducts(updatedProducts);
  }

    const totalPrice = products.reduce((total,product) => total + product.price * product.quantity,0)

  return (
    <>
      <h2>Simple Shopping Cart</h2>
      <div>
        <h3>Add a Product</h3>
        <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} value={productName} />
        <input type="number" min="0" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
        <button onClick={handleAddToProduct}>Add to Cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}

              <div>
                Quantity:
                <button onClick={()=> decreaseQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={()=>increaseQuantity(product.id)}>+</button>
              </div>
              <button onClick={()=>handleRemoveButton(product.id)}>Remove</button>
                </li>
            ))}
          </ul>
          <h4>Totoal Price: ${totalPrice} </h4>
        </div>
      ) : (
        <p>This cart is empty</p>
      )}
    </>
  );
};

export default Shopping;
