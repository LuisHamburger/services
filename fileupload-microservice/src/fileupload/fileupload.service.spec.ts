import { Test, TestingModule } from '@nestjs/testing';
import { FileuploadService } from './fileupload.service';
import { ConfigService } from '@nestjs/config';
import { PreconditionFailedException } from '@nestjs/common';



describe('FileUpload', () => {
    let fileuploadService: FileuploadService;

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [FileuploadService, ConfigService],
        }).compile();

        fileuploadService = module.get<FileuploadService>(FileuploadService);
    });

    it('should be defined', () => {
        expect(fileuploadService).toBeDefined();
    });

    it('should throw an exception deleting a local file', () => {
        expect(fileuploadService.eliminarArchivoLocal("")).toThrow()
    });
});
