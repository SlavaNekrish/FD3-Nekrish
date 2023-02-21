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
      defaultInputValue: "",
    };
  },

  sortThisArr: function() {
    var currentWordsArr = JSON.parse(JSON.stringify(this.state.words));
    var previousWordsArr = JSON.parse(JSON.stringify(this.state.words)); 
    var sortedWordsArr = currentWordsArr.sort((prev, next) => {
      if (prev.text < next.text)
      return -1;
      else if (prev.text > next.text)
      return 1;
    })
    this.setState( {words: sortedWordsArr, previousWords: previousWordsArr} );
  },

  checkboxSelected: function(info) {
    console.log('Filter блок о чекбоксе: '+info);
    if (info) {
      this.sortThisArr()
    }
    else {
      this.setState( {words:this.state.previousWords} );
    }
    this.setState( {isCheckboxChecked: info} );
  },
  
// Функция фильтрации работает некорректно. Возможно не те стейты меняю при сортировке и фильтрации

  filterThisArr: function(val, list) {
    var currentWordsArr = JSON.parse(JSON.stringify(this.state.words));
    if (val === "") {
      this.setState( {words: currentWordsArr} );
      console.log(this.state.words)
    }
    var filteredArray = list.filter(i=>(~i.text.indexOf(val)))
    
    this.setState( {words: filteredArray} );
  },

  inputTextChanged: function(fat) { 
    console.log('VotesBlock: текст инпута изменён - '+fat); 
    this.setState( {defaultInputValue: fat} );
    this.filterThisArr(fat, this.state.words)
  },

  clearInputs: function() {
    if (this.state.isCheckboxChecked || this.state.defaultInputValue) {
      this.setState( {
        words:this.props.deffwords,
        isCheckboxChecked: false,
        defaultInputValue: "",
       })
       console.log(this.props.deffwords)
       console.log('FilterBlock checkbox checked- false, input cleared'); 
    }
  },

  render: function() {

    var wordsCode=this.state.words.map( v =>
      React.DOM.option({key:v.code,className:'wordOption'}, v.text)
    );


    return React.DOM.div( {className:'FilterBlock'}, 
      React.createElement(SortBox, {cbSelected:this.checkboxSelected, selectedState:this.state.isCheckboxChecked}),
      React.createElement(FilterInput, {cbInputTextChanged:this.inputTextChanged, defaultInputFilterValue:this.state.defaultInputValue}),
      React.DOM.input( {type:'button', value:"сброс", onClick:this.clearInputs} ),
      React.DOM.br(null),
      React.DOM.select( {size:'6'}, wordsCode ),
    );

  },

});