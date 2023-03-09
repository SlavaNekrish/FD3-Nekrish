import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/br2jsx.js';

ReactDOM.render(
  <Br2jsx>
    {"первый<br>второй<br/>третий<br />последний"}
  </Br2jsx>
  , document.getElementById('container') 
);

