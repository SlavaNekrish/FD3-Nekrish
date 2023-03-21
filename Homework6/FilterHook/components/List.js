import React, { useState, useCallback, useEffect } from 'react';

const List = props => {

  const [words,setWords]=useState(props.children);

  let wordsCode=words.map( v =>
    <option key={v.code}>{v.text}</option>
  );

  return (
    <select>
      {wordsCode}
    </select>
  );
} 

export default List;