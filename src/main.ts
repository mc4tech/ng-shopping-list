// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

class ShoppingList {
  groceries: string[];
  constructor() {
    this.groceries = []
  }

  addItem(item) {
    this.groceries = [...this.groceries, item];
  }

  removeItem(item) {
    this.groceries = this.groceries.filter((grocery) => item !== grocery);
  }
}

const myList = new ShoppingList();

myList.addItem('Bread');
myList.addItem('Pizza');

console.log(myList.groceries);