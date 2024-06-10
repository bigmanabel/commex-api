import { IsNumber } from "class-validator";

export class CreateCartDto {
    @IsNumber()
    product: number;

    @IsNumber()
    quantity: number;
}
