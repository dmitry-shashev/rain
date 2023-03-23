import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
  @ApiProperty({
    type: 'string',
    example: 'Mike',
  })
  @IsNotEmpty()
  name = ''
}
