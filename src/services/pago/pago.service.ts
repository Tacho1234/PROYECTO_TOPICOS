import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagoEntity } from 'src/entities/Pago.Entity';
import { Repository } from 'typeorm';
import { ClienteService } from '../cliente/cliente.service';

@Injectable()
export class PagoService {

    constructor(@InjectRepository(PagoEntity)
        private pagoRepository: Repository<PagoEntity>, private cliente:ClienteService){
        
    }

    async crear_pago(idConsumo:number, total: number, pagado: boolean){
        return await this.pagoRepository.insert({
            idConsumo:idConsumo, total: total, pagado: pagado
        })

        .then((Res) => (console.log("El resultado es "+Res)))

        .catch((error) => (console.log("El error es "+error)))
    }

    async getpago(){
        return await this.cliente.getpago();
    }

    async getpagado(){
        return await this.cliente.getpagado();
    }

    async getnopagado(){
        return await this.cliente.getnopagado();
    }


}
