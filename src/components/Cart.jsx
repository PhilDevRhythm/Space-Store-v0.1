import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



const Cart = ({ cart, setCart, price, handlePrice, handleRemove }) => {


    const [count, setCount] = useState(1);
    
    useEffect(() => {
        handlePrice();
    })



    return (

        <div>
            <br />
            <div className='text-center text-white text-3xl justify-self-center'>Total price  of your cart is : <code>$ {price} USD</code><br /><br />
                <div className='flex justify-center'>
                    <div><Link className='btn btn-outline btn-warning text-xl mx-2' to='/2daEntrega-React/store/category/all'>Back to Store</Link></div>
                    <div><Link className='btn btn-outline btn-warning text-xl mx-2' to={{ pathname: "/2daEntrega-React/checkout", cartProps: { price: { price } } }}>CheckOut</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap p-5 justify-center'>
                {
                    cart.map((item) =>
                        <div className="text-center w-70 card card-side h-90 bg-slate-600 shadow-xl text-white p-5 m-4" key={item.id}>
                            <figure><img className='mask mask-squircle ' src={item.img} alt="Shoes" /></figure>
                            <div className="card-body text-justify">
                                <h2 className="card-title">{item.title}</h2>
                                <p className=''>{item.text}</p>
                                <ul><li className='list-none'>
                                    <p>Category: <Link className='btn btn-outline btn-warning -5' to={`/2daEntrega-React/store/category/${item.category}`}>{item.category}</Link></p>
                                    <span>Quantity Available: <code className='btn-outline text-white'>{item.stock}</code></span><br />
                                    <span>Quantity you want: <code className='btn-outline text-white'>{item.amount}</code></span><br />
                                    <span className=''>Original Price: <code className='line-through'>{item.price}</code> USD</span><br />
                                    <span>Discounted Price: <code className='btn-outline text-white'>{item.dprice}</code> USD</span><br />
                                    <span className='text-xl'>Final price: <code className='btn-outline text-white'>{item.dprice * item.amount}</code><span> USD</span></span><br />
                                </li></ul>
                                <div className="card-actions justify-center text-center p-5">
                                    <br />

                                    <button className='btn btn-outline btn-warning w-1 text-2xl' onClick={() => { if (item.amount !== item.stock) { setCount(item.amount += 1) } }}>+</button>
                                    <button className='btn btn-outline btn-warning w-1 text-2xl'>{item.amount}</button>
                                    <button className='btn btn-outline btn-warning w-1 text-2xl' onClick={() => { if (item.amount !== 0) { setCount(item.amount -= 1) } }}>-</button>
                                    <br />
                                    <br />
                                    <button className='btn btn-outline btn-warning w-15' onClick={() => handleRemove(item.id)}>Remove</button>

                                </div>
                            </div>

                        </div>


                    )}</div></div>)
}


export default Cart
