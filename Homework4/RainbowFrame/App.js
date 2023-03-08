import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame.js';


let colorsArr=require('./colors.json');

ReactDOM.render(
  <RainbowFrame colors={colorsArr}>
    Hello!
  </RainbowFrame>
  , document.getElementById('container') 
);

