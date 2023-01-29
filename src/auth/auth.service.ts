import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateAuthInput } from "./dto/create-auth.input";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UpdateUserInput } from "../user/dto/update-user.input";
import { LoginInput } from "./dto/login.input";

@Injectable()
export class AuthService {

  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
  }

  async login(loginInput :LoginInput){
    const user = await this.prismaService.user.findFirst({where: {email: loginInput.email }})
    if (!Boolean(user)){ throw new HttpException('user not found', HttpStatus.NOT_FOUND)}
    const passMatch = await this.hashCompare(loginInput.password , user.password)

    if (!passMatch) throw new HttpException('Wrong Email or Password!' ,HttpStatus.NOT_ACCEPTABLE)
    const {access_token , refresh_token } = await this.createToken(user.id , user.email)
    await this.updateRefreshToken(user.id, refresh_token)
    return {access_token, refresh_token, user }
  }



  async create(createAuthInput: CreateAuthInput) {
    /*Is User Exists*/
    const isExists = await this.prismaService.user.findFirst({ where: { email: createAuthInput.email } });
    if (Boolean(isExists)) throw new HttpException("User Already Exists!", HttpStatus.NOT_ACCEPTABLE);
    createAuthInput.password = await this.toHash(createAuthInput.password);
    const user = await this.prismaService.user.create({ data: createAuthInput });
    const {access_token , refresh_token } = await this.createToken(user.id , user.email)
    await this.updateRefreshToken(user.id, refresh_token)
    return {access_token, refresh_token, user }
  }

  //
  // findAll() {
  //   return `This action returns all auth`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }
  //
  // update(id: number, updateAuthInput: UpdateAuthInput) {
  //   return `This action updates a #${id} auth`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }


  async toHash(s: string) {
    return await bcrypt.hash(s, 10);
  }

  async hashCompare(s: string, hash: string) {
    return await bcrypt.compare(s, hash);
  }

  async createToken(userId: number, email: string) {
    const access_token = await this.jwtService.signAsync({ userId, email }, {
      expiresIn: "60s",
      secret: this.configService.get("JWT_ACCESS_TOKEN_SECRET")
    });
    const refresh_token = await this.jwtService.signAsync({ userId, email, access_token }, {
      expiresIn: "600s",
      secret: this.configService.get("JWT_REFRESH_TOKEN_SECRET")
    });
    return { access_token, refresh_token };
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    const hash_refresh_token = await this.toHash(refreshToken);
    await this.prismaService.user.update({ where: { id: userId }, data: { refresh_token: hash_refresh_token } });
  }

}
