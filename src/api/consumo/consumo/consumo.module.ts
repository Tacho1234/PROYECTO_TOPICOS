import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/Cliente.Entity';
import { ConsumoEntity } from 'src/entities/Consumo.Entity';
import { PagoEntity } from 'src/entities/Pago.Entity';
import { ClienteService } from 'src/services/cliente/cliente.service';
import { ConsumoService } from 'src/services/consumo/consumo.service';
import { PagoService } from 'src/services/pago/pago.service';
import { ConsumoController } from './consumo.controller';

@Module({imports: [TypeOrmModule.forFeature([ConsumoEntity, PagoEntity, ClienteEntity])],
        controllers: [ConsumoController],
        providers: [ ConsumoService, PagoService, ClienteService],
        exports:[TypeOrmModule]})
export class ConsumoModule {
    
}
