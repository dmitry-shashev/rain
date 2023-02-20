import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    example: 'Tester2',
  })
  @IsNotEmpty()
  name = ''

  @ApiProperty({
    example: 'tt2@tt.tt',
  })
  @IsEmail()
  email = ''
}
