import React, { useState } from 'react'


function HandleAddToCart(item, cartItems, setCartItems) {

  if (!Array.isArray(cartItems)) {
    console.log("Error: cartItems is not an array");
    return;
  }

  const newCartItems = [...cartItems, item];
  setCartItems(newCartItems);
  
  console.log(item)
  console.log(cartItems)
}

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([])

  function HandleRemoveFromCart(item) {
        // Crear un nuevo arreglo sin el producto a eliminar  
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        
      };
      console.log(cartItems) 
    return (
      <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.imagen} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => HandleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCartItems([])}>Empty Cart</button>
    </div>
    )      
}


export { ShoppingCart, HandleAddToCart };
