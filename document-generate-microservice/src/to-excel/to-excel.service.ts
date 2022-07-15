import { Injectable, StreamableFile } from '@nestjs/common';

import * as excel from 'exceljs'
import { TableDTO } from 'src/common/dtos/to-pdf.dto';

@Injectable()
export class ToExcelService {


    async generarExcel(table: TableDTO) {
        let workbook = new excel.Workbook(); //creating workbook
        let worksheet = workbook.addWorksheet(table.title);

        worksheet.columns = table.headers;
        table.data.forEach(value => worksheet.addRow(value));
        
        const excelBuffer = await workbook.xlsx.writeBuffer({ filename: table.title });

        return new StreamableFile(this.toArrayBuffer(excelBuffer))

    }

    toArrayBuffer(buf) {
        const ab = new ArrayBuffer(buf.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
            view[i] = buf[i];
        }
        return view;
    }
}
