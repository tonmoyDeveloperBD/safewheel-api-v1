import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProductService {

  constructor(private readonly prismaService:PrismaService) {
  }

  create(createProductInput: CreateProductInput) {
    return this.prismaService.product.create({
      data: {
        product_id: createProductInput.product_id,
        product_name: createProductInput.product_name,
        sale_price: createProductInput.sale_price,
        image: createProductInput.image
      },
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findFirst({where:{id},select:{
        product_id: true,
        product_name: true,
        sale_price: true,
        image: true
      }});
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.prismaService.product.update({
      data: updateProductInput,
      where:{id}
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({
      where: {id}
    });
  }
}
