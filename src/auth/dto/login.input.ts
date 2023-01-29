import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class LoginInput {

  @IsNotEmpty()
  @Field(() => String, { description: '' })
  email: string;


  @IsNotEmpty()
  @Field(() => String, { description: '' })
  password: string;
}
