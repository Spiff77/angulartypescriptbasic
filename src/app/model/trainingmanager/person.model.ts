export abstract class Person {

    constructor(private id: number, protected firstName: string, protected lastname: string) {
        console.log('constructor de Person');
    }

    accessRestaurant(): void {
        console.log(`${this.firstName} ${this.lastname} accède au restaurant`);
    }
}
