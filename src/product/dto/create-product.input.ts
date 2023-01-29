import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateProductInput {

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  product_name: string;

  @IsNotEmpty()
  @Field(() => Int, { description: '' })
  sale_price: number;

}
