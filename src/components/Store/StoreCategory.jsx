import React from 'react'
import { useParams } from 'react-router-dom';
import StoreCard from './StoreCard';
import StoreContainer from './StoreContainer';

function StoreCategory({ data, handleClick }) {

    const { category } = useParams()

    let catdata = []
    let result = []

    result = data.filter(items => items.category === category);

    catdata.push(result)





    return (
        <>
            <StoreContainer data={result} handleClick={handleClick} />
        </>
    )
}

export default StoreCategory