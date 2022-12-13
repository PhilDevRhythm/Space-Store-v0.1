import data from "../data/data.js";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCount from './ProductCount';


function ProductDetail() {

    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getItemDetail().then(res => {
            setItem(res)
        })
    }, [id]);

    const getItemDetail = async () => {
        return new Promise((resolve, reject) => {
            const item = data.find(p => p.id === id)
            setTimeout(() => { resolve(item) }, 2000);

        })
    }

    return (
        <div className="flex flex-wrap p-5">
            <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
                <figure><img src="https://placeimg.com/400/225/arch" alt="test" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.text}</p>
                    <br></br>
                    <div className="card-actions">
                        <div> Price : <code>{item.price} USD</code></div>
                        <div> Available : <code>{item.stock} items</code></div></div>
                    <br></br>
                    <div className='flex justify-center'><ProductCount stock={item.stock} id={id} /></div>
                </div>

            </div></div>
  )
}

export default ProductDetail