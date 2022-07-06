import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MulterService } from '../multer/multer.service';


@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterService
    })
  ],
  providers: [FileuploadService, MulterService],
  controllers: [FileuploadController]
})
export class FileuploadModule { }
