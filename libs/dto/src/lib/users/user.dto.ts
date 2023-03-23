import { ApiProperty } from '@nestjs/swagger'

export class UserDto {
  @ApiProperty({
    type: 'number',
    example: '2',
  })
  id = 0

  @ApiProperty({
    type: 'string',
    example: 'Tester',
  })
  name = ''

  @ApiProperty({
    type: 'string',
    example: 'tt@tt.tt',
  })
  email = ''
}
