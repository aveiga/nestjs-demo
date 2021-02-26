import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Scopes } from '@app/auth';
import { Guitar } from './guitar.model';
import { GuitarService } from './guitar.service';

@Controller('guitars')
export class GuitarController {
  private readonly logger = new Logger(GuitarController.name);

  constructor(private readonly guitarsService: GuitarService) {}

  @Get()
  @Scopes('cenassas', 'alarmmgr-sp.admin')
  getGuitars(): Array<Guitar> {
    this.logger.log(`Calling ${this.getGuitars.name}`);

    return this.guitarsService.findAll();
  }

  @Post()
  @Scopes('email')
  postGuitar(@Body() guitar: Guitar) {
    this.guitarsService.insertGuitar(guitar);
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
