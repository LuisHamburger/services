import { BadRequestException, Controller, Delete, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FileuploadService } from './fileupload.service';

@Controller('fileupload')
export class FileuploadController {

    constructor(private readonly fileUploadService: FileuploadService) { }

    @Post('cargarArchivo')
    @UseInterceptors(FileInterceptor('archivo'))
    cargarArchivo(@UploadedFile() file: Express.Multer.File) {

        if (!file) throw new BadRequestException();

        return {
            statusCode: 201,
            timestamp: new Date().toISOString(),
            archivo: file.filename,
            message: `Archivo ${file.originalname} cargado correctamente`
        }
    }

    @Post('cargarArchivos')
    @UseInterceptors(FilesInterceptor('archivos'))
    cargarArchivos(@UploadedFiles() files: Array<Express.Multer.File>) {

        if (!files.length) throw new BadRequestException();

        return {
            statusCode: 201,
            timestamp: new Date().toISOString(),
            message: `Archivos cargados correctamente`
        }
    }

    @Delete('eliminarArchivo/:archivo')
    eliminarArchivo(@Param('archivo') file: string) {
        return this.fileUploadService.eliminarArchivoLocal(file);
    }

    @Get('obtenerArchivo/:archivo')
    obtenerArchivo(@Param('archivo') file: string) {
        return this.fileUploadService.obtenerArchivo(file);
    }

}
