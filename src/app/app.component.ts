import { Component } from '@angular/core';
import {Eleve} from './model/trainingmanager/eleve.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptbasic';

  constructor() {
    const e1  = new Eleve(1, 'Jean', 'Guy', '1234', 18);

    e1.accessRestaurant();
    e1.accessCourse();
    console.log(e1);
  }

}
