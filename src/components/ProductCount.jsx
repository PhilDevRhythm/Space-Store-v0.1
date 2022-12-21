import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


export const ProductCount = ({ stock }, props) => {

    const { product, onAdd } = props;
    const [count, setcount] = useState(0);
    const { id } = useParams()
    


    // FUNCION QUE SUMA 1
    const clickHandlerUp = () => {
        // CONDICIONAL
        if (count >= stock) {
            return
        }
        setcount(count + 1)
        // FUNCION QUE RESTA 1
    }
    const clickHandlerDown = () => {
        // CONDICIONAL
        if (count === 0) {
            return
        }
        setcount(count - 1)
    }

    return (
        <div className='card bg-black p-1 flex flex-row text-center space-x-2'>
            <button onClick={clickHandlerUp} className='btn btn-dark bg-slate-600'>+</button>
            <button onClick={() => onAdd(props.id)} className='btn btn-dark hover bg-slate-600'>Add<strong className='text-xl p-2'>{count}</strong> to Cart </button>
            <button onClick={clickHandlerDown} className='btn btn-dark text-white bg-slate-600'>-</button>
        </div>
    )

}

export default ProductCount