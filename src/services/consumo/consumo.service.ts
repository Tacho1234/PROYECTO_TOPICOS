import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumoEntity } from 'src/entities/Consumo.Entity';
import { ConsumoModel } from 'src/models/Consumo.Model';
import { ClienteService } from '../cliente/cliente.service';
import { PagoService } from '../pago/pago.service';
import { Repository, MoreThan, LessThan  } from 'typeorm';

@Injectable()
export class ConsumoService {

    constructor(@InjectRepository(ConsumoEntity)
        private consumoRepository: Repository<ConsumoEntity>,
        private pagoservice:PagoService,
        private cliente: ClienteService){
    }

    async create(consumo:ConsumoModel){
        const date = new Date();
        let total = 0;
        let fecha_nacimiento = new Date(((await (this.cliente.getdate(consumo.idCliente))).fecha_nacimiento));
        
        let pagado = false;

        let edad = this.calcular_edad(fecha_nacimiento);

        if(consumo.consumo> 1 && consumo.consumo< 101){
            total= consumo.consumo * 150;
        }else if(consumo.consumo> 101 && consumo.consumo< 301){
            total= consumo.consumo * 190;
        }

        if(edad >= 50){
            total = total - (total * .10);
        }

        const newcosumo = await this.consumoRepository.save({
            fecha : date, consumo:consumo.consumo, idCliente:consumo.idCliente
        }) 

        .then((Res) => (this.pagoservice.crear_pago(Res.id, total, pagado)));

    }

    calcular_edad(datenacimiento:Date){
        const date2 = new Date();
        const anoactual:number = date2.getFullYear();
        const mesactual:number = date2.getMonth();
        const diaactual:number = date2.getDate();

        const anoNacimiento = parseInt(String(datenacimiento).substring(0,4))
        const mesNacimiento = parseInt(String(datenacimiento).substring(5,7))
        const diaNacimiento = parseInt(String(datenacimiento).substring(8,10))
        let edad = anoactual - anoNacimiento;
         if(mesactual < mesNacimiento){
            edad--
        }else if(mesactual === mesNacimiento){
            if(diaactual < diaNacimiento){
                edad--
            }
        }
        return  edad
    }

    getmin(){
        return this.consumoRepository.find(
            {
            relations:['idCliente','pago.idConsumo'],
            where:{
                consumo:LessThan(20),
            }
        })
    }

    getmaximo(){
        return this.consumoRepository.find(
            {
            relations:['idCliente','pago.idConsumo'],
            where:{
                consumo:MoreThan(300),
            }
        })
    }

    getall(){
        return this.consumoRepository.find({
            relations:['idCliente','pago.idConsumo']
        })
    }

}
