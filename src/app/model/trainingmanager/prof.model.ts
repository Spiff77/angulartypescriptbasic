import {Person} from './person.model';

export class Prof extends Person{
    constructor(id: number, firstName: string, lastname: string, private topic: string) {
        super(id, firstName, lastname);
        console.log('constructor de Prof');
    }

    giveCourse(): void {
      console.log(`${this.firstName} ${this.lastname} give course`);
    }
}
