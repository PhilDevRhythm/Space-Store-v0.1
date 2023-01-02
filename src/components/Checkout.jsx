import React from 'react'
import { useLocation } from 'react-router-dom'


function Checkout({ cart, price}) {
    
    
    
    return (
        <>
            <table>
                <tr>
                    <th><div className="text-white text-center card w-90 overflow-auto bg-slate-600 shadow-xl p-2 m-1">
                        {cart.map((item) => <div key={item.id}>
                            <h2 className="card-title">{item.title}</h2><br></br>
                            <span>Original Price: <span className='line-through'>{item.price}</span> USD</span><br></br>
                            <span>Discounted Price: {item.dprice} USD</span><br></br>
                            <span>Total Price for this item <span>{item.dprice * item.amount}USD</span></span><br></br>
                            <span>Quantity you want: x{item.amount}</span><br></br>
                            <br></br>
                        </div>)}
                    </div></th>

                    <th><div className="text-white text-right col card w- overflow-auto bg-slate-600 shadow-xl p-2 m-1">
                        {cart.map((item) => <li key={item.id}>
                            <h1>{item.title}</h1>
                            <span> Final Price: {item.dprice} USD x {item.amount}</span><br></br>
                            <span> Total Price <span>{item.dprice * item.amount} USD</span></span><br></br>
                            <br></br>
                            <div>
                            </div>
                        </li>)}
                    </div>
                    </th>
                    <th><div className="text-white text-right col card w- overflow-auto bg-slate-600 shadow-xl p-2 m-1">Total:{price}
                    {console.log(price)}
                        <button className='btn-info'>Pay</button>
                    </div></th>
                </tr>
            </table>
        </>)
}


export default Checkout