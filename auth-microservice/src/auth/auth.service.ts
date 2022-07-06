import { BadRequestException, ConflictException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { LoginDTO, UsuarioDTO } from 'src/common/dtos/usuario.dto';
import { AuthEnums } from 'src/common/enums/auth.enums';


import { Usuario, UsuarioDocument } from 'src/database/schemas/usuario.schema';


@Injectable()
export class AuthService {


    constructor(private readonly jwtService: JwtService,
        @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
        private readonly configService: ConfigService) {
    }

    generarToken(usuario: UsuarioDTO): string {
        const payload = { nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol };
        return this.jwtService.sign(payload);
    }

    async validarUsuario(loginDTO: LoginDTO): Promise<string> {

        const usuario: UsuarioDTO = await this.usuarioModel.findOne({ correo: loginDTO.correo.toUpperCase() });

        if (!usuario) throw new NotFoundException();

        const esContraseña: boolean = bcrypt.compareSync(loginDTO.contraseña, usuario.contraseña);

        if (!esContraseña) throw new HttpException("Correo y/o contraseña incorrecto/s", 401);;

        return this.generarToken(usuario);

    }

    async crearUsuario(usuarioDTO: UsuarioDTO): Promise<string> {

        let usuario = await this.usuarioModel.findOne({ correo: usuarioDTO.correo.toUpperCase(), esEliminado: false });

        if (usuario) throw new ConflictException();

        usuario = new this.usuarioModel(usuarioDTO);

        const salt = bcrypt.genSaltSync(10);

        usuario.contraseña = bcrypt.hashSync(usuario.contraseña, salt);

        usuario.correo = usuario.correo.toUpperCase();

        await usuario.save();

        return this.generarToken(usuarioDTO);

    }

    async validarToken(token: string) {
        try {
            return await this.jwtService.verifyAsync(token)
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

   
}
