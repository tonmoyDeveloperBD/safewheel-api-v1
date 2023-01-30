import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsNotEmpty } from "class-validator";

@InputType()
export class CreateProductInput {

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



  /*
  //TODO : ...

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  slug: string;

  */

}
