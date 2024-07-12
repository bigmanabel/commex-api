import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateCartDto {
    @ApiProperty({ description: 'The item quantity' })
    @IsNumber()
    quantity: number;
}
