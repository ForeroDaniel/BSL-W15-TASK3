import { IsArray, IsInt, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
  
  @IsUUID()
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string

  @IsInt()
  @IsPositive()
  stock: number

  
  @IsNumber()
  @IsPositive()
  price: number
}