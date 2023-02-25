var goodCard = React.createClass({

  displayName: 'goodCard',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired, 
    url: React.PropTypes.string.isRequired, 
    cbButtonClicked: React.PropTypes.func.isRequired,
    cbTHisGoodSelected: React.PropTypes.func.isRequired,
  },
  
  colorThisGood: function(EO) {
    this.props.cbTHisGoodSelected(this.props.code);
  },

  buttonClicked: function(EO) {
    this.props.cbButtonClicked(this.props.code);
    EO.stopPropagation()
  },

  render: function() {
      return React.DOM.tr( {className:`Good ${(this.props.selectedGood===this.props.code)? "colored" : ""}`, onClick:this.colorThisGood},
        React.DOM.th({className:'1column'},this.props.name),
        React.DOM.th({className:'2column'},this.props.price),
        React.DOM.th({className:'3column'},this.props.url),
        React.DOM.th({className:'4column'},this.props.count),
        React.DOM.th({className:'5column'},
         React.DOM.input( {type:'button', value:"Delete", onClick:this.buttonClicked} ),
        ),
      );
    
  },

});