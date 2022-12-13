import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import ProductCard from './ProductCard'

const prodList = [
    { id: 1, title: "Moon Patroller", price: 1000, dprice: 850, text: "This device will blow your mind, it has real ignition mechanism", stock: 15 },
    { id: 2, title: "Dark Moon Patroller", price: 1500, dprice: 1300, text: "This device will blow your mind, it has real ignition mechanism", stock: 3 },
    { id: 3, title: "Light Moon Patroller", price: 1800, dprice: 1600, text: "This device will blow your mind, it has real ignition mechanism", stock: 12 },
    { id: 4, title: "Twilight Moon Patroller", price: 2000, dprice: 1800, text: "This device will blow your mind, it has real ignition mechanism", stock: 20 },
    { id: 5, title: "Void Moon Patroller", price: 2200, dprice: 2000, text: "This device will blow your mind, it has real ignition mechanism", stock: 10 }
]

const ProductList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

        getProducts()
            .then(res => {

                console.log(res);
                setItems(res)
            })
            .catch(err => { console.log(err) })
    }, [])

    const getProducts = () => {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(prodList)
            }, 2000)
        })
    }

    
    return (
        <><Loading/>
        <div className='flex flex-wrap col-2'>
            {items.map(i => <ProductCard key={i.id}{...i} />)}
        </div>
        </>
    )
}

export default ProductList