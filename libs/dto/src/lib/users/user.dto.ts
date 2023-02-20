import { ApiProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiProperty({
    example: '2',
  })
  id = 0

  @ApiProperty({
    example: 'Tester',
  })
  name = ''

  @ApiProperty({
    example: 'tt@tt.tt',
  })
  email = ''
}
