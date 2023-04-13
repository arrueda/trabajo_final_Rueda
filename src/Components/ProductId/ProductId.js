import React, {useEffect, useState} from 'react';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

//ItemDetalContainer. CAPTURA EL ID DE LA APP PARA MOSTRAR UN DETALLE DE LOS PRODUCTOS

const ProductId = () => {
    const { id } = useParams()
    const [ items, setItems ] = useState({});

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

    return (
    <div className='container mt-3'>
      <img src={items.imagen} alt='Imagen heladera' />
      <p>Titulo: {items.title}</p>
      <p>Precio: $ {items.price}</p>
      <p>Capacidad: {items.capacity} litros</p>
      <p>Stock: {items.stock}</p>
    </div>
    );
}


export default ProductId;