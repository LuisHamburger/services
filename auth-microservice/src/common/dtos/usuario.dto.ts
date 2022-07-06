import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UsuarioDTO {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;

    rol: string;

    google: boolean;

    esEliminado: boolean;
}

export class LoginDTO {

    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;

}