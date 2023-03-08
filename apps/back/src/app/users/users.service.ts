import { Injectable } from '@nestjs/common'
import { PrismaService, User } from '@rain/data-access-db'
import { CreateUserDto, UpdateUserDto } from '@rain/dto'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  findOne(id: number): Promise<User> {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        id,
      },
    })
  }

  findOneByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        email,
      },
    })
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
