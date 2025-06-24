import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ description: 'The name of the product' })
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({ 
        description: 'The image of the product', 
        type: 'string', 
        format: 'binary',
        required: false 
    })
    image?: Buffer;
    
    @ApiProperty({ description: 'The description of the product' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'The price of the product', minimum: 0.01 })
    @Type(() => Number)
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    price: number;

    @ApiProperty({ description: 'The stock quantity of the product', minimum: 0 })
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    stockQuantity: number;

    @ApiProperty({ description: 'The id of the category' })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    category: number;

    @ApiProperty({ description: 'The id of the region' })
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    region: number;
}
