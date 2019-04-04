// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

function ShoppingList() {
  this.groceries = [];
};

ShoppingList.prototype.addItem = function (item) {
  this.groceries = this.groceries.concat([item]);
};
ShoppingList.prototype.removeItem = function (item) {
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
  });
};
var myList = new ShoppingList();

myList.addItem('Banana');
myList.addItem('Bread');

console.log(myList.groceries);

myList.removeItem('Banana');
console.log(myList.groceries)