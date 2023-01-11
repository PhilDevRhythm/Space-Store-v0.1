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
            {loading ? <strong className='text-xl text-white btn btn-warning'>Loading...</strong> : <div><Link className='btn justify-self-center btn-outline btn-warning m-2' to='/store/category/telescopes'> Telescopes</Link>
                <Link className='btn justify-self-center btn-outline btn-warning m-2' to='/store/category/accesories'> Accesories</Link><strong className='text-xl text-white'></strong></div>}

            </div>

)
}

            export default Loading