import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { PagoService } from 'src/services/pago/pago.service';

@Controller('pago')
export class PagoController {
    constructor(private pagoservice:PagoService){

    }

    @Get("/pago")

    getpago(){
        try{
            this.pagoservice.getpago();
        }catch(error){
            console.log("El error es "+error);
        }
    }

    @Get("/pagado")

    getpagado(){
        try{
            this.pagoservice.getpagado();
        }catch(error){
            console.log("El error es "+error);
        }
    }

    @Get("/nopagado")

    getnopagado(){
        try{
            this.pagoservice.getnopagado();
        }catch(error){
            console.log("El error es "+error);
        }
    }
}
