import { Transform } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;
    
    image: Buffer;
    
    @IsString()
    description: string;

    @IsNumber()
    @Transform(({ value }) => value.toFixed(2))
    price: number;

    @IsNumber()
    stockQuantity: number;

    @IsNumber()
    category: number;

    @IsNumber()
    region: number;
}
