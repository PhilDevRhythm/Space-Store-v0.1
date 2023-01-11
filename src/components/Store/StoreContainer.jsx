import React from 'react'
import StoreCard from './StoreCard'

function StoreContainer({ data, handleClick }) {
    return (
        <>
            <div className='flex'>
            <StoreCard data={data} handleClick={handleClick}/>
            </div>
        </>
    )
}

export default StoreContainer