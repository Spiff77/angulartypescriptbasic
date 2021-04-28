export class Person {

    constructor(private id: number, private firstName: string, private lastname: string) {
        console.log('constructor de Person');
    }

    accessRestaurant(): void {
        console.log(`${this.firstName} ${this.lastname} accède au restaurant`);
    }
}


