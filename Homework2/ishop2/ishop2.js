var GoodsBlock = React.createClass({

  displayName: 'GoodsBlock',

  propTypes: {
    goods:React.PropTypes.arrayOf(   // массив объектов карточек товаров
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string.isRequired,
      })
    )
  },

  getInitialState: function() {
    return { 
      goodsList: this.props.goods,
      selectedGood: null,
    };
  },

  GoodSelected: function(code) {
    this.setState( {selectedGood:code} );
  },

  deleteThisGood: function(code) {
    var currentGoodsArr = this.state.goodsList.filter(n => n.code !== code);
    this.setState( {goodsList: currentGoodsArr} );
  },

  render: function() {

    var goodsCode=this.state.goodsList.map( v =>
      React.createElement(goodCard, { key:v.code,
        name:v.name, count:v.count, 
        url:v.url, price: v.price, code:v.code,
        cbButtonClicked:this.deleteThisGood,
        cbTHisGoodSelected:this.GoodSelected,
        selectedGood: this.state.selectedGood,
      })
    );

    return React.DOM.table( {className:`GoodsTable`, onClick:this.paintFunction}, 
      React.DOM.thead( null, 
        React.DOM.tr( {className:'tableHeader'}, 
        React.DOM.th( {className:'1column'}, "Name"),
        React.DOM.th( {className:'2column'}, "Price"),
        React.DOM.th( {className:'3column'}, "URL"),
        React.DOM.th( {className:'4column'}, "Quantity"),
        React.DOM.th( {className:'5column'}, "Control") ) ),
      React.DOM.tbody(
        {className:'allGoods'}, goodsCode )  
    );


  },
});