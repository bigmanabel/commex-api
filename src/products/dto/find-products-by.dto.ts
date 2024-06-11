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
}