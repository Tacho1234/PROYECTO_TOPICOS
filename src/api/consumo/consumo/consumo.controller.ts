import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConsumoModel } from 'src/models/Consumo.Model';
import { ConsumoService } from 'src/services/consumo/consumo.service';

@Controller('consumo')
export class ConsumoController {

    constructor(private consumo:ConsumoService){

    }

    @Post()
    create(@Body()params:ConsumoModel){

        try{
            this.consumo.create(params);
        }catch(error){
            console.log("El error es "+error);
        }

    }

    @Get()
    getall(){
        try{
            return this.consumo.getall();
        }catch(error){
            console.log("El error es "+error);
        }
    }

    @Get("/maximo")
    getmax(){
        try{
            return this.consumo.getmaximo();
        }catch(error){
            console.log("El error es "+error);
        }
    }

    @Get("/minimo")
    getmin(){
        try{
            return this.consumo.getmin();
        }catch(error){
            console.log("El error es "+error);
        }
    }

}
