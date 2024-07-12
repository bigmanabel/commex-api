import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ description: 'The name of the product' })
    @IsString()
    name: string;
    
    @ApiProperty({ description: 'The image of the product', type: 'binary', format: 'string' })
    image: Buffer;
    
    @ApiProperty({ description: 'The description of the product' })
    @IsString()
    description: string;

    @ApiProperty({ description: 'The price of the product' })
    @IsNumber()
    @Transform(({ value }) => value.toFixed(2))
    price: number;

    @ApiProperty({ description: 'The stock quantity of the product' })
    @IsNumber()
    stockQuantity: number;

    @ApiProperty({ description: 'The id of the category' })
    @IsNumber()
    category: number;

    @ApiProperty({ description: 'The id of the region' })
    @IsNumber()
    region: number;
}
