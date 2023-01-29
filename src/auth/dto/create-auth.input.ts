import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateAuthInput {

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
