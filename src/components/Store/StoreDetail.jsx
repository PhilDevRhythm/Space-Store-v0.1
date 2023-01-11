import React from 'react'
import { useParams } from 'react-router-dom'

function StoreDetail({ data }) {

    const { product_id } = useParams();

    return (
        <>
            <div className="full-detail">
                <div className="explore-container">
                    <div className='text-white text-5xl'>{product_id}</div>
                    {data.filter((card) => card.id === product_id).map((card) => {
                        <div>
                        name {card.title}
                        </div>
                    })
                    }
                    

                    {data.filter(product => product.id === product_id).map((product, index) => (

                        <div className="card" key={index}>
                            <h2>Name: {product.id}</h2>
                            <h4>Category: {product.category}</h4>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default StoreDetail