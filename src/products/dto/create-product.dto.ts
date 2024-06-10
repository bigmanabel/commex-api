import { Transform } from "class-transformer";
import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsNumber()
    @Transform(({ value }) => value.toFixed(2))
    price: number;

    @IsNumber()
    stockQuantity: number;

    @IsNumber()
    category: number;
}
