import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    example: 'Tester2',
  })
  @IsNotEmpty()
  name = ''

  @ApiProperty({
    type: 'string',
    example: 'tt2@tt.tt',
  })
  @IsEmail()
  email = ''

  @ApiProperty({
    type: 'string',
    example: 'tt2@tt.tt',
  })
  @IsNotEmpty()
  password = ''
}
