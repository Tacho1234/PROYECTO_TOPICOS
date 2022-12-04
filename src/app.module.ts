import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './db/dbconection';
import { PagoModule } from './api/pagos/pago/pago.module';
import { ClienteModule } from './api/clientes/cliente/cliente.module';
import { ConsumoModule } from './api/consumo/consumo/consumo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env': '.env.local'
  }), Connection, PagoModule, ClienteModule, ConsumoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
