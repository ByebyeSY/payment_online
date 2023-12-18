import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto {
  stripeKey: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  count: number;
}
