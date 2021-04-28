import {Vehicle} from './vehicle.model';
import {Motorise} from './motorise';

export class Parking{
  constructor(private name: string, private $vehicles: Motorise[] = []) {
  }

  get vehicles(): Motorise[] {
    return this.$vehicles;
  }
}
