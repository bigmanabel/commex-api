import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @ApiPropertyOptional({ description: 'Number of items to return', minimum: 1, default: 10 })
    @IsOptional()
    @Type(() => Number)
    @IsPositive()
    limit: number = 10;

    @ApiPropertyOptional({ description: 'Number of items to skip', minimum: 0, default: 0 })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    offset: number = 0;
}