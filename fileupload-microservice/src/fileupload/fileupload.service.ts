import { Injectable, BadRequestException, InternalServerErrorException, PreconditionFailedException, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readFileSync, unlinkSync } from 'fs';

@Injectable()
export class FileuploadService {


    constructor(private readonly _configService: ConfigService) { }

    eliminarArchivoLocal(file: string) {
        try {
            unlinkSync(`./${this._configService.get("MULTER_DISK_DEST") || "upload"}/${file}`)

            return {
                statusCode: 200,
                timestamp: new Date().toISOString(),
                archivo: file,
                message: `Archivo eliminado correctamente`
            }

        } catch (error) {
            throw new PreconditionFailedException();
        }
    }

    obtenerArchivo(file: string) {
        try {
            const fileFound = readFileSync(`./${this._configService.get("MULTER_DISK_DEST") || "upload"}/${file}`)

            return new StreamableFile(fileFound);

        } catch (error) {
            throw new PreconditionFailedException();
        }


    }
}
