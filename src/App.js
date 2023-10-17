import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListConatiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Productos"} />}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
  );
}

export default App;