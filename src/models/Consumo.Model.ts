import { IsBoolean, IsDate,IsNumber} from "class-validator";

export class ConsumoModel{
    id: number;
    @IsDate()
    fecha: Date;
    @IsNumber()
    consumo: number;
    @IsNumber()
    idCliente: number;
    @IsBoolean()
    pagado: boolean;
}