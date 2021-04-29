export abstract class Person {

  protected constructor(public id: number,
                        public firstname: string,
                        public lastname: string,
                        public active: boolean,
                        public age?: number ) {
    this.firstname = firstname;
  }

}
