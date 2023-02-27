import React from 'react';

import './App.css';

import Ishop3 from './components/Ishop3';

let goodsArr=require('./goods.json');

function App() {
  return (
   <Ishop3
    goods={goodsArr}
   />
   
  );
}

export default App;
