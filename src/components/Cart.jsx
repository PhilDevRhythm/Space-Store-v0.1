import React from 'react'
import { useCart } from "../context/cartContext"

export default function Cart({props}) {

    const { cartItems, onAdd, onRemove, products} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onRemove(item)} className="remove">
                            -
                        </button>{' '}
                        <button onClick={() => onAdd(item)} className="add">
                            +
                        </button>
                    </div>

                    <div className="col-2 text-right">
                        {item.qty} x ${item.price.toFixed(2)}
                        <div className="m-10 text-xl">
                            <div>Cart</div>
                            <div>{cartItems.map((i) => <li key={i}>{i}</li>)}</div>
                            <button className="btn">Clear your Cart</button>
                        </div></div></div>))}
                        
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">
                            ${shippingPrice.toFixed(2)}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={() => alert('Implement Checkout!')}>
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </aside >
                    )
}
