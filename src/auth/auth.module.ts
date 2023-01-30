import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from "../prisma/prisma.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AccessTokenStrategy } from "./strategies/atl.strategy";

@Module({
  /*imports: [JwtModule.register({
    secret: "qwertyuiop",
    signOptions: {expiresIn: '60s'}
  })],*/
  providers: [AuthResolver, AuthService,PrismaService,JwtService,AccessTokenStrategy]
})
export class AuthModule {}
