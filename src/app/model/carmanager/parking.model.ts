import {Vehicle} from './vehicle.model';
import {Motorise} from './motorise';
import {Roulant} from './roulant';

export class Parking{
  constructor(private name: string, private $vehicles: Roulant[] = []) {
  }

  get vehicles(): Roulant[] {
    return this.$vehicles;
  }
}
