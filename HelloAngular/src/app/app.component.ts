import { Component } from '@angular/core';
import { FootballDataService } from './football-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerList: object[];
  title = 'app works!';
  disabledBtn = true;
  titleColor = 'red';
  name = 'John';

  constructor(private footballData: FootballDataService) {}

  ngOnInit() {
    this.playerList = this.footballData.getPlayerList()
  }

  toggleTitleColor() {
    if (this.titleColor === 'red') {
      this.titleColor = 'blue'
    } else {
      this.titleColor = 'red'
    }
  }

  myMethod(e) {
    this.title = e.target.value
  }
}
