import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsArray, IsNotEmpty } from "class-validator";

@ObjectType()
export class Product {

  @IsNotEmpty()
  @Field(() => String,{ description: '' })
  product_id: string;

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  product_name: string;

  @IsNotEmpty()
  @Field(() => Int, { description: '' })
  sale_price: number;

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  image: string;

  //TODO : slug, sku , quantity , product_images  ....

}
