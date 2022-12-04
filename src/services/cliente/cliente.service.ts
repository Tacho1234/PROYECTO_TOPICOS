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

}
