import { Component } from '@angular/core';
import {Eleve} from './model/trainingmanager/eleve.model';
import {Car} from './model/carmanager/car.model';
import {Vehicle} from './model/carmanager/vehicle.model';
import {Prof} from './model/trainingmanager/prof.model';
import {ClassRoom} from './model/trainingmanager/classroom.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptbasic';

  constructor() {
    const e1 = new Eleve(10, 'Franck', 'Zappa', 'ABCD5555', 18);
    const e2 = new Eleve(13, 'Franck1', 'Zappa', 'ABCD5555', 18);
    const e3 = new Eleve(14, 'Franck2', 'Zappa', 'ABCD5555', 18);
    const p1 = new Prof(11, 'Chuck', 'Norris', 'Dentelle');
    const p2 = new Prof(12, 'Chuck1', 'Norris', 'Dentelle');
    const c1 = new Car(10, 'Peugeot', 2, 'red');

    const cr1 = new ClassRoom('504');

    cr1.population.push(e1, e2, p1, p2, e3);

    for (const p of cr1.population) {
      if (p instanceof Eleve) {
         (p as Eleve).accessCourse();
      }
      if (p instanceof Prof) {
        (p as Prof).giveCourse();
      }
    }
  }

}
