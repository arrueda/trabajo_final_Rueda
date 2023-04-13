import React, {useEffect, useState} from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

import './CartContent.css';
/* import CartTotal from './CartTotal'; */

//CAPTURA EL CARTID DE APP PARA FORMAR EL LISTADO DE ITEMS EN EL CARRITO

const CartElementsId = () => {
  
    const { id } = useParams()
    const [ items, setItems ] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const getProducto = async () => {
        const db = getFirestore()      
    // doc, vamos a hacer el filtrado para obtener un producto
        const queryRef = doc(db , "comercial", id);
    // recibimos la info
          const response = await getDoc(queryRef);
    // creamos un nuevo objeto con la info
          const newItem = {
            id: response.id,
            ...response.data(),
          };
    // actualizamos el estado
          setTimeout(()=>{
            setItems(newItem);
          }, 1000)
        };
        getProducto();
    
    }, [id]);

    return( 
      <seccion className='container text-center position-absolute top-0 end-0 me-5 mt-5'>
        <h4 className='col'>Shopping Cart</h4>
        <hr />
        <div className='col styles'>
          <img src={items.imagen} alt='Imagen heladera' />
          <div className='col'>
            <h6>{items.title}</h6>
            <p>
              <span> $ {items.price}</span>
            </p>
          </div>
          <button>Borrar</button>
      </div>
      <div>
      <button>Comprar</button>
      </div>
      <hr />
      {/* <CartTotal cartProducts={cartProducts} /> */}
    
      </seccion>);
};



export default CartElementsId;
