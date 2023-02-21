var FilterInput = React.createClass({

  propTypes: {  
    cbInputTextChanged: React.PropTypes.func.isRequired,
    defaultInputFilterValue: React.PropTypes.string.isRequired
  },

  InputTextChanged: function(EO) {
    console.log('FilterInput: текст свободного ответа изменён - '+EO.target.value); 
    this.props.cbInputTextChanged(EO.target.value);
  },

  render: function() {
      return React.DOM.input( {type:'text', 
                              className:'FilterInput', onChange:this.InputTextChanged,
                              value:this.props.defaultInputFilterValue,
                              } );
  },

});