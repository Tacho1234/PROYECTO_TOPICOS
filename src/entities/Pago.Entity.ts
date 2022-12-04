import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
import { ConsumoEntity } from './Consumo.Entity';

@Entity()
export class PagoEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ConsumoEntity, (Consumo) => Consumo.pago)
    @JoinColumn({name:'idConsumo'})
    idConsumo: number;


    @Column()
    total: Number;
    @Column()
    pagado: Boolean;

}