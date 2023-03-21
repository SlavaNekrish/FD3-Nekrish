import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

let wordsArr=[ 
  {text:'california',code:1}, 
  {text:'everything',code:2},   
  {text:'aboveboard',code:3},
  {text:'washington',code:4}, 
  {text:'basketball',code:5},
  {text:'weathering',code:6}, 
  {text:'characters',code:7}, 
  {text:'literature',code:8}, 
  {text:'contraband',code:9}, 
  {text:'appreciate',code:10},
];

ReactDOM.render(
  <Filter deffwords={wordsArr} />
  , document.getElementById('container') 
);

