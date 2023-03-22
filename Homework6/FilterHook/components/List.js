import React from 'react';

const List = props => {


  let wordsCode=props.children.map( v =>
    <option key={v.code}>{v.text}</option>
  );

  return (
    <select size="6">
      {wordsCode}
    </select>
  );
 
} 

export default List;