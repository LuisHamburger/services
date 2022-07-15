import { Body, Controller, Get, Response } from '@nestjs/common';
import { TableDTO } from 'src/common/dtos/to-pdf.dto';
import { ValidateTablePipe } from 'src/common/pipes/validate-table.pipe';
import { ToExcelService } from './to-excel.service';

@Controller('to-excel')
export class ToExcelController {

    constructor(public toExcelService:ToExcelService){}


    @Get()
    async generateExcel(@Response({ passthrough: true }) res, @Body(new ValidateTablePipe()) table: TableDTO) {

        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': `attachment; filename=${table.title}.xlsx`,
        });

        return this.toExcelService.generarExcel(table);

    }
}
