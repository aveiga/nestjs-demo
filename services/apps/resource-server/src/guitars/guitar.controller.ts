import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { Scopes } from '@app/auth';
import { Guitar } from './guitar.model';
import { GuitarService } from './guitar.service';

@Controller('guitars')
export class GuitarController {
  private readonly logger = new Logger(GuitarController.name);

  constructor(private readonly guitarsService: GuitarService) {}

  @Get()
  @Scopes('cenassas', 'email')
  getGuitars(): Array<Guitar> {
    this.logger.log(`Calling ${this.getGuitars.name}`);

    return this.guitarsService.findAll();
  }

  @Get(':brand')
  @Scopes('email')
  getBrands(@Param('brand') brand: string): Array<Guitar> {
    this.logger.log({
      calling: this.getBrands.name,
      when: new Date(),
    });
    return this.guitarsService.findByBrand(brand);
  }
}
