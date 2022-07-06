import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioDTO, LoginDTO } from 'src/common/dtos/usuario.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('registrar')
    async nuevoUsuario(@Body() usuario: UsuarioDTO) {
        return await this.authService.crearUsuario(usuario);
    }

    @Post('ingresar')
    async validarUsuario(@Body() loginDTO: LoginDTO) {
        return await this.authService.validarUsuario(loginDTO);
    }

    @Post('esTokenValido')
    async esTokenValido(@Body("token") token: string) {
        return await this.authService.validarToken(token);
    }


}
