import { Component } from '@angular/core';
import {Person} from './model/productmanager/person.model';
import {Client} from './model/productmanager/client.model';
import {Product} from './model/productmanager/product.model';
import {A, B} from './model/dummy.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptbasic';

  constructor() {
  // const p = new Product(1, 1, 1, 1,  1, 1, 1);
   // console.log(p);
    const a: A = {id: 10, name: 'hello'};
    console.log(a);

  }

}
