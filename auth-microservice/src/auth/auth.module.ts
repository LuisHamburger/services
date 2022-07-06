import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthEnums } from 'src/common/enums/auth.enums';
import { AuthService } from './auth.service';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>(AuthEnums.JWT_SECRET_KEY),
        signOptions: { expiresIn: configService.get<number>(AuthEnums.JWT_EXPIRATION) }
      }),
      inject: [ConfigService]
    }),
    DatabaseModule
  ],
  controllers: [AuthController], 
  providers: [
    AuthService],
  exports: [AuthService]
})
export class AuthModule { }
