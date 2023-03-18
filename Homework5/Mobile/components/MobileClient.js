import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
    }),
    workMode: PropTypes.number.isRequired,
  };

  state = {
    client: this.props.client,
    workMode: this.props.workMode,
  };

  newFam = React.createRef();
  newIm = React.createRef();
  newOtch = React.createRef();
  newBalance = React.createRef();

  componentDidUpdate = (oldProps, oldState) => {
    console.log("MobileClient id="+this.props.client.id+" componentDidUpdate");
    if ( this.props.client.balance!== this.state.client.balance || this.props.client.fam !== this.state.client.fam || 
      this.props.client.im !== this.state.client.im || this.props.client.otch !== this.state.client.otch || 
      this.props.client.id !== this.state.client.id)
      this.setState({client:this.props.client});
  };

  theClientEdited = (EO) => {
    const elem = {
          fam: this.newFam.current ? this.newFam.current.value : this.props.client.fam,
          im: this.newIm.current ? this.newIm.current.value : this.props.client.im,
          otch: this.newOtch.current ? this.newOtch.current.value : this.props.client.otch,
          balance: this.newBalance.current ? +this.newBalance.current.value : this.props.client.balance,
          id: this.props.client.id,
  }
    mobileEvents.emit('ClientEdited', elem);

    this.setState({workMode: 1})
  };

  theClientDeleted = (EO) => {
    mobileEvents.emit('ClientDeleted', this.props.client.id);
  }

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
     
    return (
  
        <tr className='MobileClient'>
          { ( this.state.workMode==1 ) &&
          <React.Fragment>
            <th className='column'>{this.state.client.fam}</th>
            <th className='2column'>{this.state.client.im}</th>
            <th className='3column'>{this.state.client.otch}</th>
            <th className='4column'>{this.state.client.balance}</th>
            {
              (this.state.client.balance>=0)
              ? <th className='5column MobileClientBalanceActive'><span>active</span></th>
              : <th className='5column MobileClientBalanceBlocked'><span>blocked</span></th>
            }
            <th className='6column'>
            <input type='button' value='Редактировать' onClick={() => {this.setState({workMode: 0})}}/>
            </th>
            <th className='7column'>
            <input type='button' value='Удалить' onClick={this.theClientDeleted}/>
            </th>
          </React.Fragment>
          } 
          { ( this.state.workMode==0 ) && 
          <React.Fragment>
            <th className='column'> <input type='text' ref={this.newFam} defaultValue={this.props.client.fam}/></th>
            <th className='2column'><input type='text' ref={this.newIm} defaultValue={this.props.client.im}/></th>
            <th className='3column'><input type='text' ref={this.newOtch} defaultValue={this.props.client.otch}/></th>
            <th className='4column'><input type='text' ref={this.newBalance} defaultValue={this.props.client.balance} /></th>
            <th className='5column'>----</th>
            <th className='6column'>
            <input type='button' value='Редактировать' onClick={this.theClientEdited}/>
            </th>
            <th className='7column'>
            <input type='button' value='Удалить' onClick={this.theClientDeleted}/>
            </th>
          </React.Fragment>
          }
        </tr>
      

    );

  }

}

export default MobileClient;
