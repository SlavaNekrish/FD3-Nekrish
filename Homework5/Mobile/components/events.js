import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter(); 
// в потоке voteEvents будут все события, связанные с изменением данных клиента

export {mobileEvents};
