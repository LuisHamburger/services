import { Module } from '@nestjs/common';
import { ToExcelController } from './to-excel.controller';
import { ToExcelService } from './to-excel.service';

@Module({
  controllers: [ToExcelController],
  providers: [ToExcelService]
})
export class ToExcelModule {}
