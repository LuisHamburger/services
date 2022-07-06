import { Test, TestingModule } from '@nestjs/testing';
import { MulterService } from './multer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';


describe('MulterService', () => {
    let multerService: MulterService;
    let configService: ConfigService;

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [MulterService, ConfigService],
        }).compile();

        multerService = module.get<MulterService>(MulterService);
        configService = module.get<ConfigService>(ConfigService);
    });

    it('should be defined', () => {
        expect(multerService).toBeDefined();
    });

});
