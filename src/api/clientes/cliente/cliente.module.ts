import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/Cliente.Entity';
import { ClienteService } from 'src/services/cliente/cliente.service';
import { ClienteController } from './cliente.controller';

@Module({imports: [TypeOrmModule.forFeature([ClienteEntity])],
        controllers: [ClienteController],
        providers: [ ClienteService],
        exports:[TypeOrmModule]})
export class ClienteModule {

}
