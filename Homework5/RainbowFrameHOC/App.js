import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './components/DoubleButton.js';
import { withRainbowFrame } from './components/withRainbowFrame.js';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
  <div style={{ width: 700, textAlign: 'center', margin: '100px auto' }} >
    <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>
      в студеную зимнюю 
    </DoubleButton><br/>
    <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)}>
      вышел, был сильный
    </FramedDoubleButton>
  </div>
  , document.getElementById('container') 
);

