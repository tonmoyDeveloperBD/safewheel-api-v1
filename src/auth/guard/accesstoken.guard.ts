import {ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Reflector } from "@nestjs/core";

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super(
    );
  }

  getRequest(context:ExecutionContext){
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req;
  }

  canActivate(context: ExecutionContext) {
    const isAuthenticated = this.reflector.getAllAndOverride('isAuthenticated',[
      context.getHandler(),
      context.getClass(),
    ]);
    if (isAuthenticated){
      return super.canActivate(context)
    }
    return true
  }

}
