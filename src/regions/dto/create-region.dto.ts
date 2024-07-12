import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({ description: 'The name of the region' })
    @IsNotEmpty()
    name: string;
}
