import { Injectable } from '@nestjs/common'
import { LoginDto, LoginResultDto } from '@rain/dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(loginDto: LoginDto): LoginResultDto {
    // TODO: find the user using users service
    //       check the password and add id as a sub
    const payload = {
      username: loginDto.email,
      // id
      sub: '',
    }
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
      }),
    }
  }
}
