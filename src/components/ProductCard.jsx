import React from 'react'
import { Link } from 'react-router-dom'
import ProductCount from './ProductCount'
import { useParams } from 'react-router-dom'
import { useCart } from "../context/cartContext"

export const ProductCard = ({id, title, text, price, stock }) => {
    
    const { addToCart } = useCart()
    
    const addHandler = () => {
        addToCart( id )
    }

    
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
                        <Link to={'/store/${id}'} className="btn">Details</Link>
                        <br></br>
                        <div className='flex justify-center'><ProductCount stock={stock} id={id}/></div>
                </div>

            </div></div>


    )
}

export default ProductCard


{/* <ProductCount stock={stock} id={id}/> */}