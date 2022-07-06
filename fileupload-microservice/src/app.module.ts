import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileuploadModule } from './fileupload/fileupload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FileuploadModule]
})
export class AppModule { }
