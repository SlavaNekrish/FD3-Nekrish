import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[ 
  {id:100, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:101, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:102, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
  {id:103, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
];

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
    workMode={1}
  />
  , document.getElementById('container') 
);

