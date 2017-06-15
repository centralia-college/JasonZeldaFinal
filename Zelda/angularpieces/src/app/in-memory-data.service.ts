import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Guardian blade'},
      {id: 12, name: 'fire blade'},
      {id: 13, name: 'ice blade '},
      {id: 20, name: 'lightning blade'}
    ];
    return {weapons};
  }
}
