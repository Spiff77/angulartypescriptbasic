export class Calculator {
  constructor() {
  }

  hello(): void {
    console.log('BIENVENUE SUR SUPERCALCULATOR2000');
  }

  addition(...numbers: number[]): number {
    let result = 0;
    for (const n of numbers) {
        result += n;
    }
    return result;
  }
}
