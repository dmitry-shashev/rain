import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { LoginDto } from '@rain/dto'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService
  ) {}

  async login(loginDto: LoginDto): Promise<string> {
    const user = await this.userService.findOneByEmail(loginDto.email)

    if (!bcrypt.compareSync(String(loginDto.password), String(user.password))) {
      throw new HttpException('Password is not correct', HttpStatus.FORBIDDEN)
    }

    const payload = {
      username: user.email,
      sub: user.id,
    }

    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    })
  }
}
