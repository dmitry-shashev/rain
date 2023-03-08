import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    example: 'tt@tt.tt',
  })
  @IsNotEmpty()
  email = ''

  @ApiProperty({
    example: 'a123123',
  })
  @IsNotEmpty()
  password = ''
}
