import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-shopping-list';
}

// const ShoppingList = () => {
//   this.groceries = [];
// }

// ShoppingList.prototype.addItem = (item) => {
//   this.groceries = this.groceries.concat([item]);
// }

// const myList = new ShoppingList();

// myList.addItem('Banana');

// console.log(myList.groceries);