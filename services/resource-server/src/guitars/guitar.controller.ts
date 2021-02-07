import { Controller, Get } from "@nestjs/common";
import { Guitar } from "./guitar.model";
import { GuitarService } from "./guitar.service";

@Controller("guitars")
export class GuitarController {
    constructor(private readonly guitarsService: GuitarService) {}

    @Get()
    getGuitars(): Array<Guitar> {
        return this.guitarsService.findAll();
    }
}