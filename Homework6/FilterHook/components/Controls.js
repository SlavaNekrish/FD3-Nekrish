import React, { useState, useCallback, useEffect } from 'react';

const Controls = props => {

  const [isCheckboxChecked, chBoxSelected]=useState(false);
  const [InputValue, InptTxtChanged]=useState("");
  const [words,setWords]=useState(props.wordsForChanging);
  const [previousWords,setPreviousWords]=useState(null);

  // функции сортировки списка

  const sortThisArr = (sortList) => {
    let currentWordsArr = sortList.slice();
    currentWordsArr.sort((prev, next) => {
      if (prev.text < next.text)
      return -1;
      else if (prev.text > next.text)
      return 1;
    })
    setWords(currentWordsArr);
    setPreviousWords(sortList);
    props.cbGetChangeList(currentWordsArr);
  }

  const checkboxSelected = (EO) => {
    if (EO.target.checked) {
      chBoxSelected(EO.target.checked);
      sortThisArr(words);
    }
    else {
      chBoxSelected(false);
      setWords(previousWords);
      props.cbGetChangeList(previousWords);
    }
  }

   // функции фильтрации списка

  const filterThisArr = (val, list) => {
    let currentWordsArr = list.slice();
    let filteredArray = list.filter(i=>(~i.text.indexOf(val)))
    if (isCheckboxChecked) sortThisArr(filteredArray)
    else {
      setWords(filteredArray);
      props.cbGetChangeList(filteredArray);
      setPreviousWords(currentWordsArr);
    }
  }

  const InputTextChanged = (EO) => {
    InptTxtChanged(EO.target.value) 
    filterThisArr(EO.target.value, props.wordsForChanging)
  }

  // сброс к изначальному состоянию

  const clearInputs = () => {
    if (isCheckboxChecked || InputValue) {
      setWords(props.wordsForChanging);
      props.cbGetChangeList(props.wordsForChanging);
      chBoxSelected(false);
      InptTxtChanged("")
    }
  }

  return (
    <div>
      <input type="checkbox" checked={isCheckboxChecked} onChange={checkboxSelected} />
      <input type="text" value={InputValue} onChange={InputTextChanged} />
      <input type="button" value="сброс" onClick={clearInputs} />
    </div>
  );
} 

export default Controls;
