import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth-guard'
import { LoginDto, LoginResultDto } from '@rain/dto'
import { AuthService } from './auth.service'

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 200,
    description: 'Login the user',
    type: LoginResultDto,
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResultDto> {
    return this.authService.login(loginDto)
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Some protected',
  })
  @Get('some-protected')
  someProtected(): string {
    return 'Some protected content'
  }
}
