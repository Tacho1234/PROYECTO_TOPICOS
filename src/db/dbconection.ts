import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from 'src/entities/Cliente.Entity';
import { ConsumoEntity } from 'src/entities/Consumo.Entity';
import { PagoEntity } from 'src/entities/Pago.Entity';


export const Connection = TypeOrmModule.forRoot({
    // type: 'mysql',
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // entities: [ClienteEntity, ConsumoEntity, PagoEntity],
    // synchronize: true,
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'topicosdb',
    entities: [ClienteEntity, ConsumoEntity, PagoEntity],
    synchronize: true,
  })