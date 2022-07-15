import { Body, Controller, Get, Response, StreamableFile } from '@nestjs/common';
import { TableDTO } from 'src/common/dtos/to-pdf.dto';
import { ValidateTablePipe } from 'src/common/pipes/validate-table.pipe';
import { ToPdfService } from './to-pdf.service';

@Controller('to-pdf')
export class ToPdfController {

    constructor(public readonly toPdfService: ToPdfService) { }

    @Get()
    async getPdf(@Response({ passthrough: true }) res, @Body(new ValidateTablePipe()) table: TableDTO): Promise<StreamableFile> {

        res.set({
            'Content-Type': `application/pdf`,
            'Content-Disposition': `attachment; filename=${table.title}.pdf`,
        });
        return await this.toPdfService.generatePdf(table);
    }
}
