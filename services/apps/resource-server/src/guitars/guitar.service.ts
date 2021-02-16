import { Injectable } from '@nestjs/common';
import { Guitar } from './guitar.model';

@Injectable()
export class GuitarService {
  private guitars: Array<Guitar> = [
    new Guitar('Fender', 'Strat'),
    new Guitar('Gibson', 'Les Paul'),
  ];

  findAll(): Array<Guitar> {
    return this.guitars;
  }

  findByBrand(brand: String): Array<Guitar> {
    return this.guitars.filter((e) => e.brand === brand);
  }

  insertGuitar(guitar: Guitar) {
    return this.guitars.push(guitar);
  }
}
