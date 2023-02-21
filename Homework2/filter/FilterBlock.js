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
      isCheckboxChecked: false,
    };
  },

  sortThisArr: function() {
    var wordsArrSorted = JSON.parse(JSON.stringify(wordsArr));
    wordsArrSorted.sort((prev, next) => {
      if (prev.text < next.text)
      return -1;
      else if (prev.text > next.text)
      return 1;
    })
    this.setState( {words: wordsArrSorted} );
  },

  checkboxSelected: function(info) {
    console.log('Filter блок о чекбоксе: '+info);
    if (info) {
      this.sortThisArr()
    }
    else {
      this.setState( {words:this.props.deffwords} );
    }
    this.setState( {isCheckboxChecked: info} );
  },
  
  clearInputs: function() {
    if (this.state.isCheckboxChecked) {
      this.setState( {
        words:this.props.deffwords,
        isCheckboxChecked: false,
       })
       console.log('FilterBlock checkbox checked- false'); 
    }
  },
  
  render: function() {

    var wordsCode=this.state.words.map( v =>
      React.DOM.option({key:v.code,className:'wordOption'}, v.text)
    );


    return React.DOM.div( {className:'FilterBlock'}, 
      React.createElement(SortBox, {cbSelected:this.checkboxSelected, selectedState:this.state.isCheckboxChecked}),
      React.DOM.input( {type:'text', onChange:this.filterList, defaultValue:this.state.defaultInputValue,} ),
      React.DOM.input( {type:'button', value:"сброс", onClick:this.clearInputs} ),
      React.DOM.select( {size:'6'}, wordsCode ),
    );

  },

});