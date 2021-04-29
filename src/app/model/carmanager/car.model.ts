import {Vehicle} from './vehicle.model';
import {Motorise} from './motorise';
import {Roulant} from './roulant';

export class Car extends Vehicle implements Motorise, Roulant{

  constructor(id: number, brand: string, horsepower: number, private color: string) {
    super(id, brand, horsepower);
  }

  honk(): void {
    console.log(`${this.brand} is honking`);
  }

  inition(): void {
    console.log('La voiture démarre');
  }

  drive(): void {
    console.log('La voiture conduit dans la ville');
  }

  avancer(): void {
  }

}
