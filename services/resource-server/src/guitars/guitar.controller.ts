import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Scopes } from 'src/auth/scopes.decorator';
import { Guitar } from './guitar.model';
import { GuitarService } from './guitar.service';

@Controller('guitars')
export class GuitarController {
  constructor(private readonly guitarsService: GuitarService) {}

  @Get()
  @Scopes('cenassas', 'other')
  getGuitars(): Array<Guitar> {
    return this.guitarsService.findAll();
  }

  @Get(':brand')
  @Scopes('email')
  getBrands(@Param('brand') brand: string): Array<Guitar> {
    return this.guitarsService.findByBrand(brand);
  }
}
