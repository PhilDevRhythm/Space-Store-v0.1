import React, { useState } from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import prodList from './data/prodList';
import StoreContainer from './components/Store/StoreContainer';
import StoreDetail from './components/Store/StoreDetail';
import StoreCategory from './components/Store/StoreCategory';
import Loading from './components/Loading';
import Home from './components/Home';
import AddtoFB from './components/Firestore/AddtoFB';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const App = ({db}) => {

  // const [show, setShow] = useState(1);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [price, setPrice] = useState(0);


  const collectionRef = firebase.firestore().collection("purchaseOrders")

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
      return item
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 5000);
      return;
    }
    setCart([...cart, item]);
  }

  const handlePrice = () => {
    let ans = 0
    cart.map((item) => (
      ans += item.amount * item.dprice));
    setPrice(ans);
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr)
  }

  return (
    <>
      <BrowserRouter>
        <NavBar size={cart.length} price={price} handlePrice={handlePrice} />
        <Loading />
        {warning && <>
          <div className='alert alert-warning shadow-lg'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Item is already added to your cart, please modify quantity on your Cart </span>
            </div></div>
        </>}
        <Routes>
          <Route path='/2daEntrega-React/' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/2daEntrega-React/store/category/all' element={<StoreContainer data={prodList} handlePrice={handlePrice} handleClick={handleClick}/>} />
          <Route path='/2daEntrega-React/store' element={<StoreContainer data={prodList} handlePrice={handlePrice} />} />
          <Route path='/2daEntrega-React/store/product/:product_id' element={<StoreDetail data={prodList} handleClick={handleClick} />} />
          <Route path='/2daEntrega-React/store/category/:category' element={<StoreCategory data={prodList} handleClick={handleClick} />} />
          <Route path='/2daEntrega-React/cart' element={<Cart cart={cart} setCart={setCart} price={price} handlePrice={handlePrice} handleRemove={handleRemove} />} />
          <Route path='/2daEntrega-React/checkout/pay' element={<AddtoFB cart={cart} price={price} colRef={collectionRef} db={db}/>} />
          <Route path='/2daEntrega-React/checkout' element={<Checkout cart={cart} price={price} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
