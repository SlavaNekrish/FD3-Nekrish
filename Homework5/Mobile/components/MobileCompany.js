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
  };

  componentDidMount = () => {
    mobileEvents.addListener('ClientEdited', this.editClient);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('ClientEdited', this.editClient);
  };

  editClient = (elem) => {
    console.log(elem);
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==elem.id && (c.balance!=elem.balance || c.fam!=elem.FIO.fam || c.im!=elem.FIO.im || c.otch!=elem.FIO.otch)) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=elem.balance;
        newClient.fam=elem.FIO.fam;
        newClient.im=elem.FIO.im;
        newClient.otch=elem.FIO.otch;
        newClient.id=elem.id;
        newClients[i]=newClient;
        console.log(newClient);
        changed=true;
      }
    } );
    if ( changed )
      console.log(newClients);
      this.setState({clients:newClients});
      console.log(this.state.clients)
  }

  render() {

    console.log("MobileCompany render");

    const clientsCode=this.state.clients.map( client => {
        let FIO={fam:client.fam,im:client.im,otch:client.otch};
        return <MobileClient key={client.id} 
          id={client.id} 
          FIO={FIO} 
          balance={client.balance}
          workMode={this.props.workMode} />;
      }
    );

    return (
      <div className='MobileCompany'>
          <input type="button" value="Все" />
          <input type="button" value="Активные" />
          <input type="button" value="Заблокированные" />
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
            </tbody>
          </table>
          <input type="button" value="Добавить клиента" />
      </div>
    )
    ;

  }

}

export default MobileCompany;
