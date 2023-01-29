import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaService } from "../prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  /*imports: [JwtModule.register({
    secret: "abcd",
    signOptions: {expiresIn: '60s'}
  })],*/
  providers: [ProductResolver, ProductService,PrismaService]
})
export class ProductModule {}
