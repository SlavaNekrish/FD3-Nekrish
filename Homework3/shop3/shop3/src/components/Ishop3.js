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
    isEditing: false,
    editingCardCode: null,
    nameValue: '',
    priceValue: '',
    urlValue: '',
    quantValue: '',
    disableButtons: false,
  };

  GoodSelected = (code) => {
    this.setState( {selectedGood:code} );
  };

  GoodEdited = (code) => {
    this.setState( {isEditing: true, editingCardCode: code} );
    this.GoodSelected (code)
  };

  inputNameChange = (event) => {
    this.setState( {nameValue: event.target.value}, this.buttonsDisabling());
  }

  inputPriceChange = (event) => {
    this.setState( {priceValue: event.target.value}, this.buttonsDisabling() );
  }

  inputURLChange = (event) => {
    this.setState( {urlValue: event.target.value}, this.buttonsDisabling() );
  }

  inputQuantChange = (event) => {
    this.setState( {quantValue: event.target.value}, this.buttonsDisabling() );
  }

  //разобраться , почему buttonsDisabling не отрабатывает корректно

  buttonsDisabling = () => {
    (this.state.nameValue !== '' || this.state.priceValue !== '' ||
    this.state.urlValue !== '' || this.state.quantValue !== '') &&
    this.setState( {disableButtons: true} );
    (this.state.nameValue === '' && this.state.priceValue === '' &&
    this.state.urlValue === '' && this.state.quantValue === '') &&
    this.setState( {disableButtons: false} );
  }

  deleteThisGood = (code) => {
    const currentGoodsArr = (window.confirm("Вы уверены, удаляем?"))? this.state.goodsList.filter(n => n.code !== code) : this.state.goodsList;   //??
    this.setState( {goodsList: currentGoodsArr} );
  };


  render() {

    let goodsCode=this.state.goodsList.map( v =>
      <GoodCard key={v.code}
        name={v.name} count={v.count} code={v.code}
        url={v.url} price={v.price}
        cbButtonClicked={this.deleteThisGood}
        cbThisGoodSelected={this.GoodSelected}
        cbThisGoodEdited={this.GoodEdited}
        selectedGood={this.state.selectedGood} 
        disableBut={this.state.disableButtons}
      />
    );

    let modalCard=this.state.goodsList.filter(n => n.code === this.state.selectedGood).map( v =>
      <div className='ModalWrapper' key={v.code}>
        <h3>{v.name}</h3>
        <img src={v.url} alt='modalPicture'/>
        <h5>Price: {v.price}</h5>
      </div>
    )

    
    return (
      <div className='Wrapper'>
        <div>
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
          {(!this.state.isEditing) && <input type='button' value='New product'className='NewProduct' />}
        </div>
        <div>
          {(!this.state.isEditing) &&  modalCard}
        </div>
         {
           (this.state.isEditing) && 
           <form>
            <h3>Edit existing Good</h3>
              <span>ID: {this.state.editingCardCode}</span><br />
              <label>
                Name:
                <input type='text' value={this.state.nameValue} onChange={this.inputNameChange}/>
              </label><br />
              <label>
                Price:
                <input type='text' value={this.state.priceValue} onChange={this.inputPriceChange}/>
              </label><br />
              <label>
                URL:
                <input type='text' value={this.state.urlValue} onChange={this.inputURLChange}/>
              </label><br />
              <label>
                Quantity:
                <input type='text' value={this.state.quantValue} onChange={this.inputQuantChange}/>
              </label><br />
              <input type='button' value='Save' />
              <input type='button' value='Cancel' />
           </form>
         }
      </div>
    )
    ;

  }

}

export default Ishop3;