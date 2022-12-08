import { IsDate, IsEmail, IsNumber, IsNumberString, IsString } from "class-validator";

export class ClienteModel{
    id: number;
    @IsString()
    nombre:string;
    @IsEmail()
    correo: string;
    @IsNumber()
    telefono: number;
    @IsString()
    domicilio: string;
    @IsDate()
    fecha_nacimiento: Date;

}