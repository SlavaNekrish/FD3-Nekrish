import React from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import FullItem from './pages/FullItem';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

function App() {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="fullItem/:id" element={<FullItem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
