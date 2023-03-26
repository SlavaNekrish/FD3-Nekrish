import React from 'react';
import ReactDOM from 'react-dom';

import MainBlock from './components/MainBlock';

import { withTooltip } from './components/withTooltip';
import { TipContent } from './components/TipContent';

let MainBlockWithTooltip=withTooltip(TipContent, 1000)(MainBlock);


ReactDOM.render(
  <MainBlockWithTooltip  />
  , document.getElementById('container') 
);

