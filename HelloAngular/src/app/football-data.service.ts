import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

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
  constructor(private auth: AuthService) { }
  getPlayerList() : object[] {
    return this.auth.isAuthorized() ? this.playerList : []
  }
}
