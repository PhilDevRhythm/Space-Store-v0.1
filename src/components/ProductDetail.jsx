import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCount from './ProductCount';
import prodList from '../data/prodList';
import ProductList from './ProductList';
import { getFirestore, collection, getDoc, doc} from 'firebase/firestore'
import { list } from 'postcss';



function ProductDetail({data}) {

    
    const { id } = useParams()

    return (

        <div className='text-white'>Hello!
            {
                data   
                .filter((list) => list.id === id).map((list)=>(
                    <div className="full-card" key={list.id}></div>

                ))}
        </div>
        // <div className="flex flex-wrap p-5">
        //     <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
        //         <figure><img src="https://placeimg.com/400/225/arch" alt="test" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{item.title}</h2>
        //             <p>{item.text}</p>
        //             <br></br>
        //             <div className="card-actions">
        //                 <div> Price : <code>{item.price} USD</code></div>
        //                 <div> Available : <code>{item.stock} items</code></div></div>
        //             <br></br>
        //             <div className='flex justify-center'></div>
        //         </div>

        //     </div></div>
    )
}

export default ProductDetail