import React, { useState } from 'react'
import { getDoc, doc, collection, setDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';


function AddtoFB({ cart, price, db }) {


    const createValue = () => {
        db.collection("purchaseOrders")
            .doc()
            .set({ price: price, cart: cart })
            .then(() => { console.log("worked fine") })
    }
    createValue()

    
    
    return (
        <>
            {cart.map((item) => <div className='text-center' key={item.id}>
                                    <div className='text-center'><h2 className="card-title">{item.title}</h2><br></br>
                                        <span className='text-center'>Original Price: <span className='line-through'>{item.price}</span> USD</span><br></br>
                                        <span>Discounted Price: {item.dprice} USD</span><br></br>
                                        <span>Total Price for this item <span>{item.dprice * item.amount}USD</span></span><br></br>
                                        <span>Quantity you want: x{item.amount}</span><br></br>
                                        <br></br>
                                    </div></div>)}
            </>
            )
}
export default AddtoFB