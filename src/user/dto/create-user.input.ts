import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateUserInput {

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
