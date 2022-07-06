import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import multer, { diskStorage, memoryStorage } from 'multer';

@Injectable()
export class MulterService implements MulterOptionsFactory {

    public destino: string;
    public storage: multer.StorageEngine;
    private diskstorage: multer.StorageEngine;

    constructor(private _configService: ConfigService) {
        this.destino = this._configService.get("MULTER_DISK_DEST") || "./upload";
        this.diskstorage = diskStorage({
            destination: `./${this.destino}`,
            filename: this.fileName
        });
        this.storage = this._configService.get('MULTER_DISK_STORAGE') == "true" ? this.diskstorage : memoryStorage();
    }


    createMulterOptions(): MulterModuleOptions {
        return {
            storage: this.storage,
            fileFilter: this.fileFilter
        };
    }


    fileName(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname.replace(/\s/g, '')}`)
    }

    fileFilter(req, file, cb) {

        const ext: string = process.env.MULTER_EXT_ACCEPTED || "";
        const extArray: string[] = ext.split(",");

        const extFile: string[] = file.originalname.split(".");

        if (!extArray.includes(extFile[extFile.length - 1])) {
            cb(new BadRequestException(), false)
        }
        cb(null, true);
    }

}
