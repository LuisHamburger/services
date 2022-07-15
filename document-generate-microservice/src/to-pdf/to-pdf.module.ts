import { Module } from '@nestjs/common';
import { ToPdfController } from './to-pdf.controller';
import { ToPdfService } from './to-pdf.service';

@Module({
  controllers: [ToPdfController],
  providers: [ToPdfService]
})
export class ToPdfModule {}
