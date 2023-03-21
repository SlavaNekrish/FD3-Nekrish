import React from 'react';

import Controls from "./Controls";
import List from "./List";

const Filter = props => {
  return (
    <div className='FilterBlock'>
      <Controls />
      <List>{props.deffwords}</List>
    </div>
  );
}

export default Filter;