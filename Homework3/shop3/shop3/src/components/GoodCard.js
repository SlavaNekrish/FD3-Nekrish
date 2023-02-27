import React from 'react';
import PropTypes from 'prop-types';

import './GoodCard.css';

class GoodCard extends React.Component {

  static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    cbButtonClicked: PropTypes.func.isRequired,
    cbThisGoodSelected: PropTypes.func.isRequired,
    selectedGood: PropTypes.number, // может быть null, пока ни один ответ не выбран
  };

  colorThisGood = (EO) => {
    this.props.cbThisGoodSelected(this.props.code);
  };

  buttonClicked = (EO) => { 
    this.props.cbButtonClicked(this.props.code);
    EO.stopPropagation()
  };

  render() {

    return (
      <tr className= {(this.props.selectedGood===this.props.code)? "colored" : ""} onClick={this.colorThisGood}>
        <th className='1column'>{this.props.name}</th>
        <th className='2column'>{this.props.price}</th>
        <th className='3column'>{this.props.url}</th>
        <th className='4column'>{this.props.count}</th>
        <th className='5column'>
          <input type='button' value='Delete' onClick={this.buttonClicked}></input>
        </th>
      </tr>
    );
  }

}

export default GoodCard;
