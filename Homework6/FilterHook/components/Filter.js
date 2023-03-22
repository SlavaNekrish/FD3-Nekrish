import React, { useState } from 'react';

import Controls from "./Controls";
import List from "./List";

const Filter = props => {

  const [showWords,setShowWords]=useState(props.deffwords);

  const getChangeList = (newWords) => {
    setShowWords(newWords)
  }

  return (
    <div className='FilterBlock'>
      <Controls cbGetChangeList={getChangeList} wordsForChanging ={props.deffwords} />
      <List>{showWords}</List>
    </div>
  );
}

export default Filter;