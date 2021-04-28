import {Vehicle} from './vehicle.model';

export class Car extends Vehicle{

  constructor(id: number, brand: string, horsepower: number, private color: string) {
    super(id, brand, horsepower);
  }

  honk(): void {
    console.log(`${this.brand} is honking`);
  }

}
