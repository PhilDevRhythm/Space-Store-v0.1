import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function StoreDetail({ data }) {

    const { product_id } = useParams();

    const [item, setItem] = useState([]);

    setItem(data)
    console.log(item);

    return (
        <>
            <div className="full-detail">
                <div className="explore-container">
                    <div className='text-white text-5xl'>{product_id}</div>
                    { item.filter((item) => item.id === product_id).map((item) => {
                        <div key={item.id}>
                            name {item.title}
                        </div>
                    })
                    }



                </div>

            </div>
        </>
    )
}

export default StoreDetail

{/* 
                    {data.filter(product => product.id === product_id).map((product, index) => (

                        <div className="card" key={index}>
                            <h2>Name: {product.id}</h2>
                            <h4>Category: {product.category}</h4> */}