import { User } from '@rain/data-access-db'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Request } from 'express'

interface Payload {
  username: string
  sub: number
}

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: Payload): Promise<User> {
    return {
      id: payload.sub,
      email: payload.username,
      name: '',
      password: '',
    }
  }

  private static extractJWT(req: Request): string | null {
    return req.cookies['Authorization']
  }
}
