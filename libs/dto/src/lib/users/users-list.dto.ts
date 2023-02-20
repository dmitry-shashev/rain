import { UserDto } from './user.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UsersListDto {
  @ApiProperty({
    isArray: true,
    type: UserDto,
  })
  users: Array<UserDto> = []
}
