import React from 'react'


function Checkout({ cart }) {


    return (
        <>
            <div className='columns-2'>
            <div className='text-white card-body'>Cart Product List</div>
            {
                cart.map((item) => <div className="text-center card w-80 bg-slate-600 shadow-xl text-white p-5 m-4" key={item.id}>
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <span>Original Price: <span className='line-through'>{item.price}</span> USD</span>
                        <span>Discounted Price: {item.dprice} USD</span>
                        <span>Quantity you want: {item.amount}</span>
                        <span>Total Price for this item</span>
                        <span> {item.dprice * item.amount} USD</span></div></div>
                )}<div>test</div></div>
            

        
        </>)
}
export default Checkout