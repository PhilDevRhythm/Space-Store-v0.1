import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCount from './ProductCount';



function ProductDetail({ item }) {

    const [item, setItem] = useState([]);
    const { id } = useParams()
    const { title, text, price, stock } = item


    useEffect(() => {
        getItemDetail().then(res => {
            setItem(res)
        })
    }, [id])

    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            const item = data.find((p => p.id == id))
            setTimeout(() => { resolve(item) }, 2000);
            console.log(JSON.item);

        })
    }

    return (
        <div className="flex flex-wrap p-5">
            <div className="card w-70 bg-slate-600 shadow-xl text-white p-5">
                <figure><img src="https://placeimg.com/400/225/arch" alt="test" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{text}</p>
                    <br></br>
                    <div className="card-actions">
                        <div> Price : <code>{item.price} USD</code></div>
                        <div> Available : <code>{JSON.stringify(item)} items</code></div></div>
                    <br></br>
                    <div className='flex justify-center'></div>
                </div>

            </div></div>
    )
}

export default ProductDetail