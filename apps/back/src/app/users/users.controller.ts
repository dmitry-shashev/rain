import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto, UpdateUserDto, UserDto, UsersListDto } from '@rain/dto'
import { UsersAdapter } from './users.adapter'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth-guard'

@ApiTags('users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find all users',
    type: UsersListDto,
  })
  @Get()
  async findAll(): Promise<UsersListDto> {
    const users = await this.usersService.findAll()
    return {
      users: users.map(UsersAdapter.fromUserToDto),
    }
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Find a specific user',
    type: UserDto,
  })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    const user = await this.usersService.findOne(id)
    return UsersAdapter.fromUserToDto(user)
  }

  @ApiResponse({
    status: 201,
    description: 'Create user',
    type: UserDto,
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.create(createUserDto)
    return UsersAdapter.fromUserToDto(user)
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update user',
    type: UserDto,
  })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserDto> {
    const user = await this.usersService.update(id, updateUserDto)
    return UsersAdapter.fromUserToDto(user)
  }
}
