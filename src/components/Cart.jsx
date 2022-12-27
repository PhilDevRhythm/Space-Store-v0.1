import React from 'react'
import { useState, useEffect } from "react";

const Cart = ({cart, setCart, handleChange}) => {
    
    const[price, setPrice] = useState(0);

    


    const handlePrice = () => {
        let ans = 0
        cart.map((item) => (
            ans += item.amount * item.dprice));
        setPrice(ans);
        console.log(ans);
        
        
    }

    
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr)
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

  return (
    <div>
        <div className='text-center text-white text-3xl'>Total Price for your Cart is {price}</div>
    <div className='flex flex-wrap p-5'>
        {
        cart?.map((item) =>
        <div className="text-center card w-80 bg-slate-600 shadow-xl text-white p-5 m-4" key={item.id}>
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
                <p>{item.text}</p>
                <span>Original Price: <span className='line-through'>{item.price}</span> USD</span>
                <span>Discounted Price: {item.dprice} USD</span>
                <span>Quantity you want: {item.amount}</span>
                <span>Total Price for this item</span>
                <span> {item.dprice * item.amount} USD</span>
                <div className="card-actions justify-end text-center">
                <button className='btn btn-info text-white w-1' onClick={()=> handleChange (item, +1)}>+</button>
                <button className='btn btn-success text-white w-1'>{item.amount}</button>
                <button className='btn btn-info text-white w-1' onClick={()=> handleChange (item, -1)}>-</button>
                <button className='btn btn-warning text-white w-20' onClick={() => handleRemove(item.id)}>Remove</button>
                {console.log(item)}
                </div>
                    </div>
                    
                    </div>
            
        
    )}</div>
    <div className='text-white'> Cart Product List
        {cart.map((item) => <><div>{item.title}</div> <div></div></> )}

</div></div>)
                   
}


export default Cart
