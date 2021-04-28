import {Person} from './person.model';

export class Eleve extends Person{
    constructor(id: number, firstName: string, lastname: string, private codeEleve: string, private noteGeneral: number) {
        super(id, firstName, lastname);
        console.log('constructor de Eleve');
    }

    accessCourse(): void {
      console.log(`${this.firstName} ${this.lastname} access course`);
    }
}
