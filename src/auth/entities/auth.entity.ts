import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@ObjectType()
export class Auth {

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  name: string;


  @IsNotEmpty()
  @Field(() => String, { description: '' })
  email: string;


  @IsNotEmpty()
  @Field(() => String, { description: '' })
  password: string;
}
