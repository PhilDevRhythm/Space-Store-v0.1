import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemList = () => {


    const [item, setItem] = useState();
   

    const varId = 'YByXN8NdgyYF1ZYfCocK'

    useEffect(() => {
        getItemData()
        
    },[])

    const getItemData = () => {
        const db = getFirestore()
        const docRef = doc(db, 'items', varId)
        getDoc(docRef).then(snapshot => {
            setItem({ id: snapshot.id, ...snapshot.data() })
        })
    }

    return (
        <div className='container-xl flex-auto row-auto text-white'>
            
            {item && <>
                <h2 className='text-xl'>Discounted Product of the day</h2>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </>}
            <button className='btn' onClick={getItemData(varId)}></button>

        </div>
    )
}


export default ItemList