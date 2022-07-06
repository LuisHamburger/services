import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    apellido: string;

    @Prop({ required: true, unique: true })
    correo: string;

    @Prop({ required: true })
    contraseña: string;

    @Prop({ required: true, default: 'USUARIO' })
    rol: string;

    @Prop({ default: false })
    google: boolean;

    @Prop({ default: false })
    esEliminado: boolean;

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);