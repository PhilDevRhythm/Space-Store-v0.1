import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemList from './ItemList';


const ItemsList = () => {


    const [items, setItems] = useState([]);

    const varId = 'P1lCXafwfiYzZr5dBNWf'

    useEffect(() => {

        getItems()
    }, [])



    const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    }



    return (
        <div className='container-xl flex-auto row-auto text-white'>


            {items.map(i => <li key={i.id}>{i.title} - {i.price} - stock: {i.stock}</li>)}
            <button className='btn' onClick={<ItemList />}></button>

        </div>
    )
}


export default ItemsList