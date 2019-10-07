import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  disabledBtn = true;
  titleColor = 'red';
  name = 'John';

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
