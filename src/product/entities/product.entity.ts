import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@ObjectType()
export class Product {

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  product_name: string;

  @IsNotEmpty()
  @Field(() => Int, { description: '' })
  sale_price: number;

}
