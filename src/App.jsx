import React from 'react';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Loading from './components/Loading';
import Cart from './components/Cart';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='block col-3'>
        <div className='block col-2'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store/' element={<ProductList />} />
            {/* <Route path='/loading/' element={<Loading />} /> */}
            {/* <Route path='/store/:id' element={<ProductDetail/>}/> */}
            <Route path='/store/:id' element={<ProductDetail />}/>
            <Route path='/cart' element={<Cart/>}/>
            {/* <Route path='/' element={<ProductList/>} />  */}
          </Routes>
        </div>
        <div className='block col-1'>
          
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
