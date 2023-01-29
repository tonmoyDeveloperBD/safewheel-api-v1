import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy} from "passport-jwt";
import { AuthStrategy } from "../contracts/auth.strategy";
import { ConfigService } from "@nestjs/config";
import { UserService } from "../../user/user.service";
import { Request} from "express"
import { PrismaService } from "../../prisma/prisma.service";

export class PassportJWTAccessTokenStrategy extends PassportStrategy(Strategy,AuthStrategy.AUTH_JWT_ACCESS_TOKEN){


  constructor(
    private readonly config:ConfigService,
    private readonly userService: UserService,
    private readonly prismaService: PrismaService

  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        ExtractJwt.fromUrlQueryParameter('access_token'),
        ExtractJwt.fromBodyField('access_token'),
        (req: Request) => req.cookies['accessToken'],
      ]),
      secretOrKey: 'qwertyuiop',
    });
  }

  async validate(payload: any) {

  }

}
