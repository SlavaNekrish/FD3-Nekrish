import React from 'react';
import PropTypes from 'prop-types';

import './Ishop3.css';

import GoodCard from './GoodCard';

class Ishop3 extends React.Component {

  static propTypes = {
    goods:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    goodsList: this.props.goods,
    selectedGood: null,
  };

  GoodSelected = (code) => {
    this.setState( {selectedGood:code} );
  };

  deleteThisGood = (code) => {
    const currentGoodsArr = this.state.goodsList.filter(n => n.code !== code);   //??
    this.setState( {goodsList: currentGoodsArr} );
  };

  render() {

    let goodsCode=this.state.goodsList.map( v =>
      <GoodCard key={v.code}
        name={v.name} count={v.count} code={v.code}
        url={v.url} price={v.price}
        cbButtonClicked={this.deleteThisGood}
        cbThisGoodSelected={this.GoodSelected}
        selectedGood={this.state.selectedGood}
      />
    );

    return (
      <table className='GoodsTable'>
        <thead>
          <tr className='tableHeader'>
            <th className='1column'>Name</th>
            <th className='2column'>Price</th>
            <th className='3column'>URL</th>
            <th className='4column'>Quantity</th>
            <th className='5column'>Control</th>
          </tr>
        </thead>
        <tbody className='allGoods'>
          {goodsCode}
        </tbody>
      </table>
    )
    ;

  }

}

export default Ishop3;