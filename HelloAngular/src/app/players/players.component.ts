import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playerList: object[];

  constructor(private footballData: FootballDataService) { }

  ngOnInit() {
    this.playerList = this.footballData.getPlayerList()
  }

}
