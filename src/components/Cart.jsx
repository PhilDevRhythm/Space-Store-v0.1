import React from 'react'
import { useCart } from "../context/cartContext"

export default function Cart() {

    const { items, clearCart } = useCart()


    return (
        <aside>
            <div className="m-10 text-xl">
                <div>Cart</div>
                <div>{items.map((i) => <li key={i}>{i}</li>)}</div>
                <button className="btn" onClick={clearCart}>Clear your Cart</button>
            </div>
        </aside>
    )
}
