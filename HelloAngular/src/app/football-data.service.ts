import { Injectable } from '@angular/core';

@Injectable()
export class FootballDataService {
  playerList: object[] = [
    {
      name: 'Christiano Ronaldo'
    },
    {
      name: 'Lionel Messi'
    },
    {
      name: 'Robert Lewandowski'
    }
  ]
  constructor() { }
  getPlayerList() : object[] {
    return this.playerList
  }
}
