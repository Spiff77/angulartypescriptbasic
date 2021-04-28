import {Vehicle} from './vehicle.model';
import {Motorise} from './motorise';
import {Roulant} from './roulant';
import {Flottant} from './flottant';

export class Boat extends Vehicle implements Motorise, Flottant{

  inition(): void {
    console.log('Le bateau demarre sur les flots');
  }

  lacherAncre(): void {
    console.log('Le bateau ne bouge plus');
  }

}
