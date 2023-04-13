import React from 'react';
import { Link } from 'react-router-dom';

import carrito from '../Image/carrito.png';


//ItemDetalContainer

const ItemDetailCart = ({ cartProducts }) => {
 /*  // Calcula la cantidad total de productos seleccionados en el carrito
  const totalQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0); */

  return (
    <div className='carrito-compras'>
      <Link to='/shoppingcart'>
        <img className='carrito-compras-img' src={carrito} alt='Imagen de carrito de compras' />
      </Link>
      <p className='carrito-compras-num'>{/* {totalQuantity} */}5</p>
    </div>
  );
};

export default ItemDetailCart