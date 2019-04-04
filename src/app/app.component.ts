import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  name: string = 'Todd'
  logo: string = './favicon.ico'
  constructor() {
    this.title = 'ng-shopping-list'
  }
}
