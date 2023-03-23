import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService, User } from '@rain/data-access-db'
import { CreateUserDto, UpdateUserDto } from '@rain/dto'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(id: number): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    })
    if (!user) {
      throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
    }
    return user
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
    }
    return user
  }

  findAll(): Promise<Array<User>> {
    return this.prismaService.user.findMany()
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
        password: createUserDto.password,
      },
    })
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        name: updateUserDto.name,
      },
    })
  }
}
