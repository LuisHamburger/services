import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'


import { DataBase } from 'src/common/enums/database.enum';

import { Usuario, UsuarioSchema } from './schemas/usuario.schema';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>(DataBase.MONGODB_CNN),
            }),
            inject: [ConfigService]
        }),
        MongooseModule.forFeature([
            { name: Usuario.name, schema: UsuarioSchema }
        ])
    ],

    exports: [
        MongooseModule
    ]
})
export class DatabaseModule { }

