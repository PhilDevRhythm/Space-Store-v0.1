import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function StoreDetail({ data, handleClick }) {

    const { product_id } = useParams();
    let item = []
    item.push(data[product_id - 1])

    return (

        <>
            <div className="flex justify-center">

                {item.map(card => (
                    <div key={card.id}>
                        <div className="flex flex-wrap p-5">
                            <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
                                <div className='flex justify-center m-5'><Link className='btn btn-outline btn-warning m-3 w-25 ' to='/'>Back to Store</Link></div>
                                <figure><img src="https://placeimg.com/400/225/arch" alt="test" /></figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{card.title}</h2>
                                    <p>{card.text}</p>
                                    <br></br>
                                    
                                    <br></br>
                                    <div className="card-actions flex flex-row justify-center">
                                        <div className='p-2'> <p>Category: <Link className='btn btn-outline btn-warning -5' to={`/store/${card.category}`}>{card.category}</Link></p> Available : <code>{card.stock} items</code><br></br>Price : <code className='line-through'>{card.price} USD</code><br /> Discount price : <code className='text-2xl'>{card.dprice} USD</code></div>
                                        <br></br></div>
                                        <div className=' p-2 flex justify-center my-5'>
                                            <Link><button className='p-2 btn btn-outline btn-warning text-white' onClick={() => handleClick(card)}>Add to cart</button></Link>
                                            <div className='m-2'></div>
                                            
                                        </div>
                                        <div className='flex justify-center'></div>
                                    </div>

                                </div></div>


                    </div>))}</div>
        </>

    )
}

export default StoreDetail

{/* 
                    {data.filter(product => product.id === product_id).map((product, index) => (

                        <div className="card" key={index}>
                            <h2>Name: {product.id}</h2>
                            <h4>Category: {product.category}</h4> */}