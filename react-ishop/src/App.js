import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://64295fee5a40b82da4d189a9.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} items={items} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
