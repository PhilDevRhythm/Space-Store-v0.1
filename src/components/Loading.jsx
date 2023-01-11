import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Loading() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            console.log("1");
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <div className='text-center p-5'>
            {loading ? <strong className='text-xl text-white btn btn-warning'>Loading...</strong> :
                <div className="flex text-center justify-center">
                    <Link className='btn btn-outline btn-warning mx-5' to={'/2daEntrega-React/'}>All</Link>
                    <Link className='btn btn-outline btn-warning mx-5' to={'/2daEntrega-React/store/category/telescopes'}>Telescopes</Link>
                    <Link className='btn btn-outline btn-warning mx-5' to={'/2daEntrega-React/store/category/lens'}>Lens</Link>
                    <Link className='btn btn-outline btn-warning mx-5' to={'/2daEntrega-React/store/category/accessories'}>accessories</Link>
                </div>}

        </div>

    )
}

export default Loading