import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { PagoService } from 'src/services/pago/pago.service';

@Controller('pago')
export class PagoController {
    constructor(private pagoservice:PagoService){

    }

    @Get("/pago")

    async getpago(){
        try{
            return await this.pagoservice.getpago();
        }catch(error){
            console.log("El error es "+error);
        }
    }

    @Get("/pagado")

    async getpagado(){
        try{
            return await this.pagoservice.getpagado();
        }catch(error){
            console.log("El error es "+error);
        }
    }

    @Get("/nopagado")

    async getnopagado(){
        try{
            return await this.pagoservice.getnopagado();
        }catch(error){
            console.log("El error es "+error);
        }
    }
}
