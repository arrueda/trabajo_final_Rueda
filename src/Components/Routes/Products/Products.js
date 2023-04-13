import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

import carrito from '../../Image/carrito.png';
import './Products.css'

import { HandleAddToCart } from '../CartContent/handleAddToCart';

// PostListContainer. Listado de heladeras

const Products = () => {

  const [ items, setItems ] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollections = collection(db, 'comercial');

    getDocs(itemCollections).then((snapshotList) =>{
      const docs = snapshotList.docs.map(snapshot =>({
        id: snapshot.id,...snapshot.data(),
      }));
      setItems(docs);
    })
  }, [])

    return (
      <div className='contenedor mt-3'>
        {items.map((item) => (
        <div className='container' key={item.id}>
          <img src={item.imagen} alt='Imagen heladera' />
          <p>Titulo: {item.title}</p>
          <p>Precio:$ {item.price}</p>
          <Link to={`/productos/${item.id}`} className="btn btn-primary">Ver más</Link>
          <div>
            <button onClick={()=> HandleAddToCart(item, cartItems, setCartItems)} className="btn btn-primary">
            <img className='carrito-compras-img' src={carrito} alt='Imagen de carrito de compras' />
            Comprar
            </button>
          </div>
        </div>
        ))}
      </div>
    );
}


export default Products;