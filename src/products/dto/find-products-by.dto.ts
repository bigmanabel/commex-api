import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class FindProductsByDto {
    @ApiPropertyOptional({ description: 'Filter by product name' })
    @IsOptional()
    @IsString()
    name: string;

    @ApiPropertyOptional({ description: 'Filter by category ID' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    category: number;

    @ApiPropertyOptional({ description: 'Filter by region ID' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    region: number;

    @ApiPropertyOptional({ description: 'Minimum price filter' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    min: number;

    @ApiPropertyOptional({ description: 'Maximum price filter' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    max: number;
}