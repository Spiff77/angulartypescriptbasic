import {Vehicle} from './vehicle.model';

export class Truck extends Vehicle{

  constructor(id: number, brand: string, horsepower: number, private color: string, private weigth: number) {
    super(id, brand, horsepower);
  }
}
