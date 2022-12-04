import { ConsumoModel } from './Consumo.model';

export interface PagoModel{
    id:number;
    Consumo:ConsumoModel[];
    total:number;
    pagado:boolean;
}