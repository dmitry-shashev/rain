import { User } from '@rain/data-access-db'
import { UserDto } from '@rain/dto'

export abstract class UsersAdapter {
  public static fromUserToDto(user: User): UserDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }
}
