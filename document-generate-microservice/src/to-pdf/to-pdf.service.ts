import { BadRequestException, Injectable, StreamableFile } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import pdfDocument from 'pdfkit-table'
import { Buffer } from 'buffer';
import { TableDTO } from 'src/common/dtos/to-pdf.dto';
import { createWriteStream } from 'fs';

@Injectable()
export class ToPdfService {

    public options = {
        // properties
        title: "Title", // { label: 'Title', fontSize: 30, color: 'blue', fontFamily: "./fonts/type.ttf" },
        subtitle: "Subtitle", // { label: 'Subtitle', fontSize: 20, color: 'green', fontFamily: "./fonts/type.ttf" },
        width: 500, // {Number} default: undefined // A4 595.28 x 841.89 (portrait) (about width sizes)
        x: 50, // {Number} default: undefined | To reset x position set "x: null"
        y: 50, // {Number} default: undefined | 
        divider: {
            header: { disabled: false, width: 1, opacity: 1 },
            horizontal: { disabled: false, width: 0.5, opacity: 0.5 }
        },
        padding: [1,5], // {Number} default: 0
        columnSpacing: 5, // {Number} default: 5
        hideHeader: false,
        minRowHeight: 0,
    }

    constructor(public _config: ConfigService) {

    }

    async generatePdf(table: TableDTO) {

        try {

            const document = new pdfDocument();

            /*Personalización de pdf*/

            document.addPage({ size: "LETTER" });

            document.table(table, this.options);

            document.pipe(createWriteStream("./document.pdf"));

            document.end();

            const pdfBuffer: Buffer = await new Promise((resolve) => {

                let pdfFile = [];

                document.on("data", () => {
                    pdfFile.push.bind(pdfFile);
                })

                document.on("end", () => {
                    resolve(Buffer.concat(pdfFile));
                })

            })

            return new StreamableFile(pdfBuffer);
        } catch (error) {
            throw new BadRequestException();
        }

    }

}