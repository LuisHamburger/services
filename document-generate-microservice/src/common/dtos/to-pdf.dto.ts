import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class TableDTO {
    
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsArray()
    headers: object[];
    
    @IsNotEmpty()
    @IsArray()
    data: object[];

}

