import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth-guard'
import { LoginDto, UserDto } from '@rain/dto'
import { AuthService } from './auth.service'
import { Response, Request } from 'express'
import { UsersService } from '../users/users.service'
import { User } from '@rain/data-access-db'
import { UsersAdapter } from '../users/users.adapter'

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Login the user',
  })
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<void> {
    const token = await this.authService.login(loginDto)
    response.cookie('Authorization', token, {
      httpOnly: true,
      maxAge: Number(process.env.JWT_EXPIRES_IN),
    })
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Logout',
  })
  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response): void {
    response.clearCookie('Authorization', {
      httpOnly: true,
    })
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get current user data',
    type: UserDto,
  })
  @UseGuards(JwtAuthGuard)
  @Get('current-user')
  async getCurrentUser(@Req() request: Request): Promise<UserDto> {
    // we fill this field in 'jwt-strategy' - validate
    const tokenUser = request.user as User
    const currentUser = await this.userService.findOne(tokenUser.id)
    return UsersAdapter.fromUserToDto(currentUser)
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Some protected',
  })
  @UseGuards(JwtAuthGuard)
  @Get('some-protected')
  someProtected(): string {
    return 'Some protected content'
  }
}
