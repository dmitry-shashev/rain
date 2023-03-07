import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { PrismaService } from '@rain/data-access-db'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import fs from 'fs'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  // init prisma
  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)
  // -

  // init swagger
  const config = new DocumentBuilder()
    .setTitle('Rain API')
    .setDescription('For the backend side if the app')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .build()
  const document = SwaggerModule.createDocument(app, config)
  fs.writeFileSync(
    './apps/back/swagger.json',
    JSON.stringify(document, null, 2)
  )
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
  // -

  // add the global validation pipe
  app.useGlobalPipes(new ValidationPipe())
  // -

  const port = process.env.PORT || 3333
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
