import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function Checkout({ cart, price}) {
    
    
    
    return (
        <> <div><Link className='btn btn-outline btn-warning m-3' to='/'>Back to Store</Link></div>
        <div>
            <table>
                <tr className='flex flex-wrap'>
                    <th className='text-white text-xl btn-warning m-2 '>Items on your Cart
                        <div className="text-white text-center flex card overflow-auto bg-slate-600 shadow-xl p-2 m-1"><div className='flex flex-col'>
                        {cart.map((item) => <div className='text-center' key={item.id}>
                            <div className='text-center'><h2 className="card-title">{item.title}</h2><br></br>
                            <span className='text-center'>Original Price: <span className='line-through'>{item.price}</span> USD</span><br></br>
                            <span>Discounted Price: {item.dprice} USD</span><br></br>
                            <span>Total Price for this item <span>{item.dprice * item.amount}USD</span></span><br></br>
                            <span>Quantity you want: x{item.amount}</span><br></br>
                            <br></br>
                        </div></div>)}</div>
                    </div></th>
                    
                    <th className='text-white text-xl text-center'><div className='btn-warning m-2 p-2 text-center text-white'>Final<div><div className="text-white text-right col card overflow-auto  bg-slate-600 shadow-xl p-2 m-1">Total: ${price}
                    <button className='btn btn-outline btn-warning text-2xl my-2'>Pay</button>
                    </div></div></div></th>
                </tr>
            </table>
            </div>
            </>)
}


export default Checkout