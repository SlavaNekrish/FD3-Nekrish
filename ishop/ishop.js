var GoodsBlock = React.createClass({

  displayName: 'GoodsBlock',

  propTypes: {
    headLine: React.PropTypes.string.isRequired, // текст вопроса
    goods:React.PropTypes.arrayOf(   // массив объектов карточек товаров
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
      })
    )

  },

  render: function() {

    var goodsCode=this.props.goods.map( v =>
        React.DOM.div({key:v.code,className:'GoodCard'},
          React.DOM.h6({className:'goodName'},v.name),
          React.DOM.img({className:'picture', src: v.url}),
          React.DOM.span({className:'price'},v.price),
          React.DOM.span({className:'quantity'},v.count),
        )
      );
    return React.DOM.div( {className:'GoodsBlock'}, 
      React.DOM.div( {className:'headLine'}, this.props.headLine ),
      React.DOM.div( {className:'goods'}, goodsCode ),
    );
  },

});