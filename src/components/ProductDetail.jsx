import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCount from './ProductCount';


function ProductDetail() {

    const [item, setItem] = useState();
    const {id} = useParams()

    useEffect(() => {
        getItemDetail().then(res => {
            setItem( res)
        })
    }, [ id ]);

    const getItemDetail = async () => {
        return new Promise ((resolve, reject) => {
            const item = data.find(p => p.id === id)
            setTimeout(() => {resolve( item )}, 2000);
            
        })
    }

return (
    
    <div className='flex-wrap'>
        <h1>Detalles del producto: { id }</h1>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
        <ProductCount stock={item.stock}/>
    
    </div>
  )
}

export default ProductDetail