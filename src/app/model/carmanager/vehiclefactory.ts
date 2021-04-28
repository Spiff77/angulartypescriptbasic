import {Car} from './car.model';
import {Truck} from './truck.model';

export class VehicleFactory {

  private static id = 0;

  private constructor() {
  }

  static createCar(color?: string): Car {
    const car = new Car(++this.id, 'peugeot', 10, color ? color : this.generateColor());
    return car;
  }

  static createTruck(color?: string): Truck {
    const truck = new Truck(++this.id, 'peugeot', 10, color ? color : this.generateColor(), 120);
    return truck;
  }

  private static generateColor(): string {
    const rand = Math.floor(Math.random() * 4);
    switch (rand) {
      case 0 :
          return 'red';
      case 1:
          return 'blue';
      case 2:
          return 'yellow';
      default:
          return 'moche';
    }

  }

}
