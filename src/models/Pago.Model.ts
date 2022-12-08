import { IsBoolean, IsNumber } from 'class-validator';
import { ConsumoModel } from './Consumo.model';

export class PagoModel{
    id:number;
    Consumo:ConsumoModel[];
    @IsNumber()
    total:number;
    @IsBoolean()
    pagado:boolean;
}