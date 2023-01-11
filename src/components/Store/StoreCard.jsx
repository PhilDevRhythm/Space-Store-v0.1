import React from 'react'
import { Link } from 'react-router-dom'
import StoreDetail from './StoreDetail'

function StoreCard({ data, handleClick }) {
    return (
        <>
            {data.map((card, index) => (
                <div key={index}>
                    <div className="p-5">
                        <div className="card-normal flex flex-col w-70 bg-slate-600 text-white p-5">
                            <figure><img className='mask mask-squircle' src="https://placeimg.com/500/260/arch" alt="test" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                <p>{card.text}</p>
                                <br></br>
                                <div className="card-actions card justify-center" >
                                    <div> Available : <code>{card.stock} items</code><br></br>Price : <code className='line-through'>{card.price} USD</code><br /> Discount price : <code className='text-2xl'>{card.dprice} USD</code></div>


                                    
                                    <div className='flex justify-center'>
                                        <Link><button className='p-2 btn btn-outline btn-warning text-white' onClick={() => handleClick(card) }>Add to cart</button></Link>
                                        <div className='m-2'></div>
                                        <Link className='btn btn-warning btn-outline' to={`/store/product/${card.id}`}>View Details</Link>
                                    </div></div>

                            </div>

                        </div></div>


                </div>
            ))}
        </>
    )
}

export default StoreCard




