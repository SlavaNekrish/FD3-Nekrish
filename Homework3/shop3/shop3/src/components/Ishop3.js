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
    nameValue: '', priceValue: '',
    urlValue: '', quantValue: '',
    disableButtons: false,
    emptyNameError: false, emptyPriceError: false, emptyURLError: false, emptyQuantError: false, 
    notStringNameError: false, notStringURLError: false,
    notNumberPriceError: false, notNumberQuantError: false,
    disableSaveBut: false,
    dontShowModal: ''
  };

  GoodSelected = (code) => {
    this.setState( {selectedGood:code} );

  };

  GoodEdited = (code) => {
    let editedCard = this.state.goodsList.filter(n => n.code === code);
    this.setState( {isEditing: true, previousGood: editedCard, editingCardCode: code, nameValue: editedCard[0].name,
      priceValue: editedCard[0].price, urlValue: editedCard[0].url, quantValue: editedCard[0].count} );
    this.GoodSelected (code)
  };

  inputNameChange = (event) => {
    this.setState( {nameValue: event.target.value} );
  }

  inputPriceChange = (event) => {
    this.setState( {priceValue: event.target.value} );
  }

  inputURLChange = (event) => {
    this.setState( {urlValue: event.target.value} );
  }

  inputQuantChange = (event) => {
    this.setState( {quantValue: event.target.value} );
  }

  buttonsDisabling = () => {
    this.setState( {disableButtons: true, dontShowModal: "dontShowModal"} );
  }

  buttonSaveDisabling = () => {
    ( this.state.emptyNameError ||  this.state.emptyPriceError || this.state.emptyURLError || this.state.emptyQuantError || 
      this.state.notStringNameError || this.state.notStringURLError || this.state.notNumberPriceError || this.state.notNumberQuantError ) 
      && this.setState( {disableSaveBut: true} );
    ( !this.state.emptyNameError && !this.state.emptyPriceError && !this.state.emptyURLError && !this.state.emptyQuantError && 
      !this.state.notStringNameError && !this.state.notStringURLError && !this.state.notNumberPriceError && !this.state.notNumberQuantError ) 
      && this.setState( {disableSaveBut: false} );
  }

  createError = (event) => {
    switch (event.target.className) {
      case "Name":
        (event.target.value === '') ? 
        this.setState( {emptyNameError: true}, this.buttonSaveDisabling) : this.setState( {emptyNameError: false}, this.buttonSaveDisabling);  
        (Number(event.target.value) || event.target.value === '') ?
        this.setState( {notStringNameError: true}, this.buttonSaveDisabling ) : this.setState( {notStringNameError: false}, this.buttonSaveDisabling );  
      break;
      case "Price":
        (event.target.value === '') ? 
        this.setState( {emptyPriceError: true}, this.buttonSaveDisabling ) : this.setState( {emptyPriceError: false}, this.buttonSaveDisabling );  
        (!Number(event.target.value) || event.target.value === '') ?
        this.setState( {notNumberPriceError: true}, this.buttonSaveDisabling ) : this.setState( {notNumberPriceError: false}, this.buttonSaveDisabling );  
      break;
      case "URL":
        (event.target.value === '') ? 
        this.setState( {emptyURLError: true}, this.buttonSaveDisabling ) : this.setState( {emptyURLError: false}, this.buttonSaveDisabling );  
        (Number(event.target.value) || event.target.value === '') ?
        this.setState( {notStringURLError: true}, this.buttonSaveDisabling ) : this.setState( {notStringURLError: false}, this.buttonSaveDisabling );  
      break;
      case "Quantity":
        (event.target.value === '') ? 
        this.setState( {emptyQuantError: true}, this.buttonSaveDisabling ) : this.setState( {emptyQuantError: false}, this.buttonSaveDisabling );  
        (!Number(event.target.value) || event.target.value === '') ?
        this.setState( {notNumberQuantError: true}, this.buttonSaveDisabling ) : this.setState( {notNumberQuantError: false}, this.buttonSaveDisabling );  
      break;
    }
  }

  saveEditing = () => {
    const editedGood = { name: this.state.nameValue, code: this.state.editingCardCode,
            price: Number(this.state.priceValue), url: this.state.urlValue, 
            count: Number(this.state.quantValue) };
    const oldGoodIndex = this.state.goodsList.findIndex(el => el.name === this.state.nameValue)
    this.state.goodsList.splice(oldGoodIndex, 1, editedGood)
    this.setState( {goodsList: this.state.goodsList, isEditing: false, disableButtons: false, dontShowModal: '', 
    selectedGood: null, editingCardCode: null} );
  }

  cancelEditing = () => {
    this.setState( {isEditing: false, disableButtons: false, dontShowModal: '', selectedGood: null, emptyNameError: false, emptyPriceError: false, emptyURLError: false, emptyQuantError: false, 
    notStringNameError: false, notStringURLError: false, notNumberPriceError: false, notNumberQuantError: false} );
  }

  deleteThisGood = (code) => {
    const currentGoodsArr = (window.confirm("Вы уверены, удаляем?"))? this.state.goodsList.filter(n => n.code !== code) : this.state.goodsList;   //??
    this.setState( {goodsList: currentGoodsArr, isEditing: false} );
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
      <div className={this.state.dontShowModal} key={v.code}>
        <div className='ModalWrapper'>
          <h3>{v.name}</h3>
          <img src={v.url} alt='modalPicture'/>
          <h5>Price: {v.price}</h5>
        </div>
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
          {(this.state.editingCardCode !== this.state.selectedGood) && modalCard}
        </div>
         {
           (this.state.isEditing) && 
           <form onChange={this.buttonsDisabling}>
            <h3>Edit existing Good</h3>
              <span>ID: {this.state.editingCardCode}</span><br />
              <label>
                Name:
                <input type='text' value={this.state.nameValue} className='Name' onChange={this.inputNameChange} onBlur={this.createError}/>
                {(this.state.emptyNameError) &&  <span className='Error'>Please, fill the field</span>}
                {(this.state.notStringNameError) &&  <span className='Error'>  Value must be a string</span>}
              </label><br />
              <label>
                Price:
                <input type='text' value={this.state.priceValue} className='Price' onChange={this.inputPriceChange} onBlur={this.createError}/>
                {(this.state.emptyPriceError) &&  <span className='Error'>Please, fill the field</span>}
                {(this.state.notNumberPriceError) &&  <span className='Error'>  Value must be a number</span>}
              </label><br />
              <label>
                URL:
                <input type='text' value={this.state.urlValue} className='URL' onChange={this.inputURLChange} onBlur={this.createError}/>
                {(this.state.emptyURLError) &&  <span className='Error'>Please, fill the field</span>}
                {(this.state.notStringURLError) &&  <span className='Error'>  Value must be a string</span>}
              </label><br />
              <label>
                Quantity:
                <input type='text' value={this.state.quantValue} className='Quantity' onChange={this.inputQuantChange} onBlur={this.createError}/>
                {(this.state.emptyQuantError) &&  <span className='Error'>Please, fill the field</span>}
                {(this.state.notNumberQuantError) &&  <span className='Error'>  Value must be a number</span>}
              </label><br />
              <input type='button' value='Save'  disabled={this.state.disableSaveBut} onClick={this.saveEditing}/>
              <input type='button' value='Cancel' onClick={this.cancelEditing}/>
           </form>
         }
      </div>
    )
    ;

  }

}

export default Ishop3;