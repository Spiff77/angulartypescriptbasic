export interface Tool {
  id: number;
  name: string;
  color: string;
}

export class A {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  id: number;
  name: string;
}

export class B {

  constructor(public id: number, public name: string, public age: number) {

  }
}

const a: B = {id: 10, name: 'hello', age: 10};
console.log(a);
