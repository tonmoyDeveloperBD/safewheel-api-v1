import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from "class-validator";

@ObjectType()
export class User {

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  name: string;


  @IsNotEmpty()
  @Field(() => String, { description: '' })
  email: string;


  @IsNotEmpty()
  @Field(() => String, { description: '' })
  password: string;


  @IsOptional()
  @Field(() => String, { description: '',nullable: true })
  refresh_token: string;


}
