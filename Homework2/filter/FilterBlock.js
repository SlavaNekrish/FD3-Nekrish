var FilterBlock = React.createClass({

  displayName: 'FilterBlock',

  propTypes: {
    deffwords:React.PropTypes.arrayOf(   // массив объектов слово+код
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
      })
    )
  },

  getInitialState: function() {
    return { 
      words:this.props.deffwords,
      previousWords: null,
      isCheckboxChecked: false,
      InputValue: "",
    };
  },

  // функции сортировки списка

  sortThisArr: function(sortList) {
    var currentWordsArr = sortList.slice();
    currentWordsArr.sort((prev, next) => {
      if (prev.text < next.text)
      return -1;
      else if (prev.text > next.text)
      return 1;
    })
    this.setState( {words: currentWordsArr, previousWords: sortList} );
  },

  checkboxSelected: function(EO) {
    if (EO.target.checked) {
      this.setState( {isCheckboxChecked: EO.target.checked} );
      this.sortThisArr(this.state.words);
      
    }
    else {
      this.setState( {isCheckboxChecked: false, words:this.state.previousWords} );
    }
  },

    // функции фильтрации списка

  filterThisArr: function(val, list) {
    var currentWordsArr = list.slice();
    var filteredArray = list.filter(i=>(~i.text.indexOf(val)))
    if (this.state.isCheckboxChecked) this.sortThisArr(filteredArray)
    else this.setState( {words: filteredArray, previousWords: currentWordsArr} );
  },

  InputTextChanged: function(EO) { 
    this.setState( {InputValue: EO.target.value} );
    this.filterThisArr(EO.target.value, this.props.deffwords)
  },

  clearInputs: function() {
    if (this.state.isCheckboxChecked || this.state.InputValue) {
      this.setState( {
        words:this.props.deffwords,
        isCheckboxChecked: false,
        InputValue: "",
       })
    }
  },

  render: function() {

    var wordsCode=this.state.words.map( v =>
      React.DOM.option({key:v.code,className:'wordOption'}, v.text)
    );

    return React.DOM.div( {className:'FilterBlock'}, 
      React.DOM.input( {type:'checkbox', className:'Sortbox', onChange:this.checkboxSelected, checked: this.state.isCheckboxChecked}),
      React.DOM.input( {type:'text', className:'FilterInput', onChange:this.InputTextChanged, value: this.state.InputValue}),
      React.DOM.input( {type:'button', value:"сброс", onClick:this.clearInputs} ),
      React.DOM.br(null),
      React.DOM.select( {size:'6'}, wordsCode ),
    );
  },
});