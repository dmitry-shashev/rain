import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from './auto-generated-client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this['$connect']()
  }

  enableShutdownHooks(app: INestApplication): void {
    this['$on']('beforeExit', async () => {
      await app.close()
    })
  }
}
