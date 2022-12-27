import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart'
import Checkout from './components/Checkout';

function App() {

  const [show, setShow] = useState(1);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}
  
  console.log(cart);

  const handleChange = (item, d) => {
    
    let ind = -1

    cart.forEach((data, index)=>{
      if (data.id === item.id)
      ind = index;
    })
    
    const tempArr = cart;
    tempArr[ind] = d;
    
    if (tempArr[ind].amount === 0) 
      tempArr[ind].amount = 1;
    setCart([...tempArr])
    console.log(tempArr);
  }

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);


  return (
    <>

      <BrowserRouter>
        <NavBar setShow={setShow} size={cart.length}/>
        {/* {if show == 1 <ProductList handleClick={handleClick}/>
          }if else{ <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} */}

        {warning && <div className='alert-warning'>Item is already added to your cart</div>}
        <Routes>
          <Route index element={<ProductList handleClick={handleClick}/>}/>
          <Route path='/' element={<ProductList handleClick={handleClick} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
          {/* <Route index element={<Home />} />
          <Route path='2daEntrega-React/' element={<Home />} /> */}
          {/* <Route path='2daEntrega-React/store/' element={<ProductList />} /> */}
          {/* <Route path="2daEntrega-React/store/:id" element={<ProductDetail/>} /> */}
          <Route path='/checkout' element={<Checkout cart={cart}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
        );
        
        }
export default App;
