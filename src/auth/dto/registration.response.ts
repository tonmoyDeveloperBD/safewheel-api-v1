import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { User } from "../../user/entities/user.entity";


@ObjectType()
export class RegistrationResponse {
  @Field({defaultValue: ''})
  access_token: string;

  @Field({defaultValue: ''})
  refresh_token: string;

  @Field(()=> User)
  user: User;
}
