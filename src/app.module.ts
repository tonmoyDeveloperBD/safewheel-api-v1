import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from "@nestjs/config";
import configs from './app/config'
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { builders } from "prettier/doc";
import { join } from 'path'
import { UserModule } from './user/user.module';
import { PrismaService } from "./prisma/prisma.service";
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import {APP_GUARD } from "@nestjs/core";
import { AccessTokenGuard } from "./auth/guard/accesstoken.guard";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    ignoreEnvFile: process.env.NODE_ENV === 'prod',
    load: configs,
    envFilePath: ['.env'],
  }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground:true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema:true
    }),
    UserModule,
    AuthModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService,ConfigService,PrismaService,{provide: APP_GUARD, useClass: AccessTokenGuard}],
})
export class AppModule {}
