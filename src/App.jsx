import React, { useState } from 'react';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import data from './data/data';
import ItemsList from './components/from_fb/ItemsList';
import ItemList from './components/from_fb/ItemList';



function App() {

  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <><BrowserRouter>
      <NavBar cartItems={cartItems.length} />
      <Routes>
        <Route index element={<Home />} />
        <Route path='2daEntrega-React/' element={<Home />} />
        <Route path='2daEntrega-React/store/' element={<ProductList products={products} onAdd={onAdd}/>} />
        <Route path='2daEntrega-React/store/:id' element={<ProductDetail />} />
        <Route path='2daEntrega-React/cart' element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>} />
        <Route path='2daEntrega-React/items' element={<ItemsList/>} />
        <Route path='2daEntrega-React/item' element={<ItemList/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
