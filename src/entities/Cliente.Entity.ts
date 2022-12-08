import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { ConsumoEntity } from './Consumo.Entity';

@Entity()
export class ClienteEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    @Column()
    correo: string;
    @Column()
    telefono: number;
    @Column()
    domicilio: string;
    @Column()
    fecha_nacimiento: Date;
    @OneToMany(() => ConsumoEntity, (consumo) => consumo.idCliente)
    consumo: ConsumoEntity[];
}