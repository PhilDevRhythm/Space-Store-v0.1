import React from 'react'
import StoreCard from './StoreCard'

function StoreContainer({ data, handleClick }) {
    return (
        <>
        <div className='md:flex md:flex-wrap'>
            <StoreCard data={data} handleClick={handleClick}/>
            </div>
        </>
    )
}

export default StoreContainer