import React from 'react'
import { Link } from 'react-router-dom'
import ProductCount from './ProductCount'
import { useParams } from 'react-router-dom'


export const ProductCard = ({ item, handleClick }) => {


    const { id, title, text, price, stock } = item


    return (

        <div className="flex flex-wrap p-5">
            <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
                <figure><img className='mask mask-squircle' src="https://placeimg.com/500/260/arch" alt="test" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{text}</p>
                    <br></br>
                    <div className="card-actions">
                        <div> Price : <code>{price} USD</code></div>
                        <div> Available : <code>{stock} items</code></div>
                    </div>
                    <br></br>
                    <div className='flex justify-center'>
                        <Link><button className='p-2 btn btn-outline btn-warning text-white' onClick={() => handleClick(item)}>Add to cart</button></Link>
                        <div className='m-2'></div>
                        <Link><button className='p-2 btn btn-outline btn-warning text-white' to=''>View Details</button></Link>
                    </div>

                </div>

            </div></div>


    )
}

export default ProductCard


{/* <ProductCount stock={stock} id={id}/> */ }