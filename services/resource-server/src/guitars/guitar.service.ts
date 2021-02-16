import { Injectable } from '@nestjs/common';
import { Guitar } from './guitar.model';

@Injectable()
export class GuitarService {
  findAll(): Array<Guitar> {
    return [new Guitar('Fender', 'Strat'), new Guitar('Gibson', 'Les Paul')];
  }

  findByBrand(brand: String): Array<Guitar> {
    return [
      new Guitar('Fender', 'Strat'),
      new Guitar('Gibson', 'Les Paul'),
    ].filter((e) => e.brand === brand);
  }
}
