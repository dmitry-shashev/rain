#### Install

```bash
pnpm add @nestjs/swagger
```

#### Add init in the `main.ts`

```bash
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import fs from 'fs'

...

  const config = new DocumentBuilder()
    .setTitle('Rain API')
    .setDescription('For the backend side if the app')
    .setVersion('1.0')
    .addTag('users')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  fs.writeFileSync('./apps/back/swagger.json', JSON.stringify(document, null, 2))
  SwaggerModule.setup('api', app, document)
```

#### Assign tags on the controllers

For each controller add

```bash
@ApiTags('users')
@Controller('users')
...
```

#### Each DTO field should be described

> at least

```bash
  @ApiProperty()
```

or

```bash
  @ApiProperty({
    isArray: true,
    type: UserDto,
  })
```

or

```bash
  @ApiProperty({
    example: 'tt@tt.tt'
  })
```