import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/Cliente.Entity';
import { ClienteModel } from 'src/models/Cliente.Model';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(@InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>){

    }

    async create(Cliente:ClienteModel){
        return await this.clienteRepository.insert(Cliente).catch((error)=>console.log("El error es "+error));
    }

    getall():Promise<ClienteEntity[]>{
        return this.clienteRepository.find();
    }

    async getdate(id:number):Promise<ClienteEntity>{
        return await this.clienteRepository.findOne({ where:{id:id} })
    }

    getreporte(){
        return this.clienteRepository.find
        ({relations:
            {consumo:
                {pago:true}}
            })
    }

    getpago(){
        
        return this.clienteRepository.find({relations:{consumo:{pago:true}},select:{id:true,nombre:true,telefono:true,domicilio:true,fecha_nacimiento:true,consumo:{id:true, pago:true}}})
    }

    async getpagado(){
        let clientesencontrados = await this.clienteRepository.find({relations:{consumo:{pago:true}},where:{consumo:{pago:{pagado:true}}},select:{id:true,nombre:true,telefono:true,domicilio:true,fecha_nacimiento:true,consumo:{id:true, pago:true}}})
        return clientesencontrados;
    }

    getnopagado(){
        return this.clienteRepository.find({relations:{consumo:{pago:true}},where:{consumo:{pago:{pagado:false}}},select:{id:true,nombre:true,telefono:true,domicilio:true,fecha_nacimiento:true,consumo:{ id:true, pago:true}}})
    }

    async getid(id:number){
        return await this.clienteRepository.findOne({ relations:{consumo:{pago:true}}, where:{id:id} })
    }

}
