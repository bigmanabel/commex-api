import { IsOptional, IsPositive } from "class-validator";

export class FindProductsByDto {
    @IsOptional()
    name: string;

    @IsOptional()
    @IsPositive()
    category: number;

    @IsOptional()
    @IsPositive()
    region: number;

    @IsOptional()
    @IsPositive()
    min: number;

    @IsOptional()
    @IsPositive()
    max: number;
}