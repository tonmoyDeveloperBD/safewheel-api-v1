import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../user/entities/user.entity";


@ObjectType()
export class LoginResponse {
  @Field({defaultValue: ''})
  access_token: string;

  @Field({defaultValue: ''})
  refresh_token: string;

  @Field(()=> User)
  user: User;
}
