import React from 'react'
import { Link } from 'react-router-dom'
import ProductCount from './ProductCount'
import { useParams } from 'react-router-dom'
import {  useCartContext } from "../context/cartContext"

export const ProductCard = ({id, title, text, price, stock }, onAdd) => {
    
    // const { addToCart } = useCartContext()
    
    // const addHandler = () => {
    //     addToCart( id )
    
    // }

    useParams(id)

    
    return (

        <div className="flex flex-wrap p-5">
            <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
                <figure><img src="https://placeimg.com/400/225/arch" alt="test" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{text}</p>
                    <br></br>
                    <div className="card-actions">
                        <div> Price : <code>{price} USD</code></div>
                        <div> Available : <code>{stock} items</code></div></div>
                        <br></br>
                        <Link  id={id} to={`id=${id}`} className="btn">Details</Link>
                        <br></br>
                        <div className='flex justify-center'><ProductCount addToCart={onAdd} stock={stock} id={id} /></div>
                </div>

            </div></div>


    )
}

export default ProductCard


{/* <ProductCount stock={stock} id={id}/> */}