import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClienteModel } from 'src/models/Cliente.Model';
import { ClienteService } from 'src/services/cliente/cliente.service';

@Controller('cliente')
export class ClienteController {

    constructor(private Cliente:ClienteService){

    }

    @Post()
    create(@Body()params:ClienteModel){

        try{
            this.Cliente.create(params);
        }catch(error){
            console.log("El error es "+error);
        }

    }

    @Get()
    getall(){
        try{
            return this.Cliente.getall();
        }catch(error){
            console.log("El error es "+error);
        }
    }
}
