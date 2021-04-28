import {Person} from './person.model';
import {Eleve} from './eleve.model';
import {Prof} from './prof.model';

export class ClassRoom{
  constructor(private name: string, public population: Person[] = []) {
  }
}
