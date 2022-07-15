import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ToPdfModule } from './to-pdf/to-pdf.module';
import { ToExcelModule } from './to-excel/to-excel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ToPdfModule,
    ToExcelModule
  ]
})
export class AppModule { }
