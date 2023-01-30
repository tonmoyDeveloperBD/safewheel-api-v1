import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthStrategy } from "../contracts/auth.strategy";
import { ApiBearerAuth } from '@nestjs/swagger'
/*export const Authenticated =() =>{
  return applyDecorators(
    UseGuards(AuthGuard(AuthStrategy.AUTH_JWT_ACCESS_TOKEN)),
    ApiBearerAuth(),
  )
} */

export const Authenticated = () => SetMetadata('isAuthenticated',true);
