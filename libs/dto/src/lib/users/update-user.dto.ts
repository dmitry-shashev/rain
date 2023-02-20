import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
  @ApiProperty({
    example: 'Mike',
  })
  @IsNotEmpty()
  name = ''
}
