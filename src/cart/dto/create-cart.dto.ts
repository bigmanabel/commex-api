import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateCartDto {
    @ApiProperty({ description: 'The id of the product to be added to cart' })
    @IsNumber()
    product: number;

    @ApiProperty({ description: 'The item quantity' })
    @IsNumber()
    quantity: number;
}
