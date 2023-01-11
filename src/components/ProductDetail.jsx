import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCount from './ProductCount';
import prodList from '../data/prodList';
import ProductList from './ProductList';



function ProductDetail ({ data }) {

    const [item, setItem] = useState([]);
    const { id } = useParams()
    
    useEffect(() => {
        getItem()},
        [id]);


    const getItem = () => {
        setItem(prodList.products.filter(item == item.id))
    }


    
    return (
          
        <div className="flex flex-wrap p-5">
            <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
                <figure><img src="https://placeimg.com/400/225/arch" alt="test" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{prodList.text}</p>
                    <br></br>
                    <div className="card-actions">
                        <div> Price : <code>{prodList.price} USD</code></div>
                        <div> Available : <code>{prodList.stock} items</code></div></div>
                    <br></br>
                    <div className='flex justify-center'></div>
                </div>

            </div></div>
    )
}

export default ProductDetail