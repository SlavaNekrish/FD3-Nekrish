import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    FIO:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
    balance: PropTypes.number.isRequired,
    workMode: PropTypes.number.isRequired,
  };

  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
    workMode: this.props.workMode,
  };

  newFam = React.createRef();
  newIm = React.createRef();
  newOtch = React.createRef();
  newBalance = React.createRef();

  componentDidUpdate = (oldProps, oldState) => {
    console.log("MobileClient id="+this.props.id+" componentDidUpdate");
    if ( this.props.balance!==this.state.balance || this.props.FIO!==this.state.FIO)
      this.setState({balance:this.props.balance, FIO: this.props.FIO});
  };

  theClientEdited = (EO) => {
    const elem = {
      id: this.props.id,
      FIO: {
          fam: this.newFam.current ? this.newFam.current.value : this.props.FIO.fam,
          im: this.newIm.current ? this.newIm.current.value : this.props.FIO.im,
          otch: this.newOtch.current ? this.newOtch.current.value : this.props.FIO.otch,
      },
      balance: this.newBalance.current ? +this.newBalance.current.value : this.props.balance,
  }
    console.log(elem);
    mobileEvents.emit('ClientEdited', elem);

    this.setState({workMode: 1})
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
     
    return (
  
        <tr className='MobileClient'>
          { ( this.state.workMode==1 ) &&
          <React.Fragment>
            <th className='column'>{this.state.FIO.fam}</th>
            <th className='2column'>{this.state.FIO.im}</th>
            <th className='3column'>{this.state.FIO.otch}</th>
            <th className='4column'>{this.state.balance}</th>
            {
              (this.state.balance>=0)
              ? <th className='5column MobileClientBalanceActive'><span>active</span></th>
              : <th className='5column MobileClientBalanceBlocked'><span>blocked</span></th>
            }
            <th className='6column'>
            <input type='button' value='Редактировать' onClick={() => {this.setState({workMode: 0})}}/>
            </th>
            <th className='7column'>
            <input type='button' value='Удалить' />
            </th>
          </React.Fragment>
          } 
          { ( this.state.workMode==0 ) && 
          <React.Fragment>
            <th className='column'> <input type='text' ref={this.newFam} defaultValue={this.props.FIO.fam}/></th>
            <th className='2column'><input type='text' ref={this.newIm} defaultValue={this.props.FIO.im}/></th>
            <th className='3column'><input type='text' ref={this.newOtch} defaultValue={this.props.FIO.otch}/></th>
            <th className='4column'><input type='text' ref={this.newBalance} defaultValue={this.props.balance} /></th>
            <th className='5column'>----</th>
            <th className='6column'>
            <input type='button' value='Редактировать' onClick={this.theClientEdited}/>
            </th>
            <th className='7column'>
            <input type='button' value='Удалить' />
            </th>
          </React.Fragment>
          }
        </tr>
      

    );

  }

}

export default MobileClient;
