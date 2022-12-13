import React, { useEffect, useState } from 'react'

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
        { loading ? <strong className='text-xl text-white btn'>Loading...</strong> : <strong className='text-xl text-white'></strong>}
           
    </div>

)
}

export default Loading