export abstract class Vehicle {

  constructor(private id: number, protected brand: string, private horsepower: number) {
  }

  start(): void{
    console.log(`${this.brand} is starting`);
  }
}
