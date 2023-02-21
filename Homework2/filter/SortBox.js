var SortBox = React.createClass({

  propTypes: {  
    cbSelected: React.PropTypes.func.isRequired,
    selectedState: React.PropTypes.bool.isRequired
  },

  checkboxClicked: function(EO) {
    if(EO.target.checked){
      this.props.cbSelected(true);
      console.log('SortBox checked- true'); 
      }
      else {
      this.props.cbSelected(false);
      console.log('SortBox checked- false'); 
      }
  },

  render: function() {
      return React.DOM.input( {type:'checkbox', 
                              className:'Sortbox', onChange:this.checkboxClicked,
                              checked: this.props.selectedState,} );
  },

});