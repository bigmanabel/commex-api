import { IsOptional, IsPositive } from "class-validator";

export class FindProductsByDto {
    @IsOptional()
    name: string;

    @IsOptional()
    category: number;

    @IsOptional()
    region: number;

    @IsOptional()
    min: number;

    @IsOptional()
    max: number;
}