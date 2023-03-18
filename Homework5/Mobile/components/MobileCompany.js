import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import {mobileEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    workMode:PropTypes.number.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    addingForm: false,
    status: 0,
  };

  addFam = React.createRef();
  addIm = React.createRef();
  addOtch = React.createRef();
  addBalance = React.createRef();

  componentDidMount = () => {
    mobileEvents.addListener('ClientEdited', this.editClient);
    mobileEvents.addListener('ClientDeleted', this.deleteClient);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('ClientEdited', this.editClient);
    mobileEvents.removeListener('ClientDeleted', this.deleteClient);
  };

  editClient = (elem) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==elem.id && (c.balance!=elem.balance || c.fam!=elem.fam || c.im!=elem.im || c.otch!=elem.otch)) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=elem.balance;
        newClient.fam=elem.fam;
        newClient.im=elem.im;
        newClient.otch=elem.otch;
        newClient.id=elem.id;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };

  deleteClient = (clientid) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients = newClients.filter(n => n.id !== clientid)
    changed=true;
    if ( changed )
    this.setState({clients:newClients});
  };

  addClient = (EO) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    const newClient={
      balance: this.addBalance.current ? +this.addBalance.current.value : null,
      fam: this.addFam.current ? this.addFam.current.value : null,
      im: this.addIm.current ? this.addIm.current.value : null,
      otch: this.addOtch.current ? this.addOtch.current.value : null,
      id: this.state.clients.reduce((acc, cur) => acc.id > cur.id ? acc.id : cur.id) + 1,
    }
    newClients.push(newClient);
    changed=true;
    if ( changed )
    this.setState({clients:newClients, addingForm: false});
  };

  filterAll = () => this.setState({ status: 0 });
  filterActive = () => this.setState({ status: 1 });
  filterBlocked = () => this.setState({ status: 2 });
  
  render() {

    console.log("MobileCompany render");

    const filteredClients = this.state.clients.filter((client) => {
      switch (this.state.status) {
        case 1: return client.balance > 0;
        case 2: return client.balance < 0;
        default: return true;
      }
    });
    
    const clientsCode=filteredClients.map( client => {
        return <MobileClient key={client.id} 
          client={client}
          workMode={this.props.workMode} />;
      }
    );

    return (
      <div className='MobileCompany'>
          <input type="button" value="Все" onClick={this.filterAll}/>
          <input type="button" value="Активные" onClick={this.filterActive}/>
          <input type="button" value="Заблокированные" onClick={this.filterBlocked} />
          <table className='MobileTable'>
          <thead>
              <tr className='tableHeader'>
                <th className='1column'>Фамилия</th>
                <th className='2column'>Имя</th>
                <th className='3column'>Отчество</th>
                <th className='4column'>Баланс</th>
                <th className='5column'>Статус</th>
                <th className='6column'>Редактировать</th>
                <th className='6column'>Удалить</th>
              </tr>
            </thead>
            <tbody className='allClients'>
            {clientsCode}
            { ( this.state.addingForm ) && 
              <tr>
                <th className='column'> <input type='text' ref={this.addFam} /></th>
                <th className='2column'><input type='text' ref={this.addIm} /></th>
                <th className='3column'><input type='text' ref={this.addOtch} /></th>
                <th className='4column'><input type='text' ref={this.addBalance} /></th>
                <th><input type="button" value="Готово" onClick={this.addClient} /></th>
              </tr>
            }
            </tbody>
          </table>
          <input type="button" value="Добавить клиента" onClick={()=>this.setState({addingForm: true})}/>
          
      </div>
    )
    ;

  }

}

export default MobileCompany;
