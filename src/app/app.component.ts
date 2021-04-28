import { Component } from '@angular/core';
import {Eleve} from './model/trainingmanager/eleve.model';
import {Car} from './model/carmanager/car.model';
import {Vehicle} from './model/carmanager/vehicle.model';
import {Prof} from './model/trainingmanager/prof.model';
import {ClassRoom} from './model/trainingmanager/classroom.model';
import {Parking} from './model/carmanager/parking.model';
import {Truck} from './model/carmanager/truck.model';
import {Boat} from './model/carmanager/boat.model';
import {Bike} from './model/carmanager/bike.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptbasic';

  constructor() {
    const p = new Parking('Superpark');
    const b = new Boat(121, 'bobato', 12);
    const bi = new Bike();
    const c = new Car(121, 'bobato', 12, 'd');

    p.vehicles.push(b);
    p.vehicles.push(c);

    for (const v of p.vehicles) {
      v.inition();
    }
  }

}
