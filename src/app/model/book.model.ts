import {Media} from './media.model';

export class Book extends Media{
  constructor(id: number, nom: string, public nbPages: number = 0, public nombreAnnexe= 0) {
    super(id, nom);
  }

  calculatePageTotal(): number {
    const nombre = this.nbPages + this.nombreAnnexe;
    return nombre;
  }
}
