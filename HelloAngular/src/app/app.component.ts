import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResponseData {
  body: string,
  id: number,
  userId: number,
  title: string
}

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

  constructor(private http: HttpClient) {}

  fetchNewTitle() {
    this.http.get<ResponseData>('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(
        data => {
          this.title = data.title
        },
        error => {
          console.log(error)
        }
      )
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
