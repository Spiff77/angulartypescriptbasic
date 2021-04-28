import {Vehicle} from './vehicle.model';
import {Motorise} from './motorise';

export class Parking{
  constructor(private name: string, private $vehicles: Vehicle[] = []) {
  }

  get vehicles(): Vehicle[] {
    return this.$vehicles;
  }
}
