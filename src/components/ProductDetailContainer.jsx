import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore'
import ProductDetail from './ProductDetail';
import prodList from '../data/prodList';



function ProductDetailContainer({preData}) {
    

    return (
        <>
            <ProductDetail data={preData} />
        </>)
}

export default ProductDetailContainer