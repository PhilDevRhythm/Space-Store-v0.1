import React from 'react'
import { Link } from 'react-router-dom'


function StoreCard({ data, handleClick }) {
    return (
        <>
            {data.map((card, index) => (
                <div key={index}>
                    <div className="p-5">
                        <div className="card-normal flex-col bg-slate-600 text-white p-5">
                            <figure><img className='mask mask-circle' src={card.img} alt="item" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                <div className='w-80 break-words'><p >{card.text}</p></div>
                                <br />
                                <div className="card-actions card" >

                                    <div> Available : <code>{card.stock} items</code><br></br>Price : <code className='line-through'>{card.price} USD</code><br /> Discounted price : <code className='text-2xl'>{card.dprice} USD</code></div>
                                    <br />
                                    <div className='flex'>
                                        <div className='flex justify-evenly'>
                                            <Link><button className='p-2 btn btn-outline btn-warning text-white' onClick={() => handleClick(card)}>Add to cart</button></Link>
                                            <div className='m-2'></div>
                                            <Link className='btn btn-warning btn-outline' to={`/2daEntrega-React/store/product/${card.id}`}>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>

                        </div></div>


                </div>
            ))}
        </>
    )
}

export default StoreCard




