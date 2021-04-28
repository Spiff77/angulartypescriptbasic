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
import {Calculator} from './model/calculator.model';
import {VehicleFactory} from './model/carmanager/vehiclefactory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptbasic';

  constructor() {
    const parking = new Parking('superpark');
    parking.vehicles.push(VehicleFactory.createCar('red'));
    parking.vehicles.push(VehicleFactory.createTruck('red'));


    console.log(parking);
  }

}
