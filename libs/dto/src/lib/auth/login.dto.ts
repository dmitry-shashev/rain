import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    type: 'string',
    example: 'tt@tt.tt',
  })
  @IsNotEmpty()
  email = ''

  @ApiProperty({
    type: 'string',
    example: 'a123123',
  })
  @IsNotEmpty()
  password = ''
}
