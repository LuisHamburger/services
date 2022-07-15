import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TableDTO } from '../dtos/to-pdf.dto';

@Injectable()
export class ValidateTablePipe implements PipeTransform {
  transform(value: TableDTO, metadata: ArgumentMetadata) {


    value.data.forEach(row => {
      if (value.headers.length < Object.keys(row).length) throw new BadRequestException();
    })


    return value;
  }
}
