import { PrismaClient, User } from './auto-generated-client'

const prisma = new PrismaClient()

async function seedUsers(): Promise<void> {
  const users: ReadonlyArray<User> = [
    {
      id: 1,
      name: 'Tester',
      email: 'tt@tt.tt',
    },
    {
      id: 2,
      name: 'Tom',
      email: 'tom@tt.tt',
    },
  ]

  // eslint-disable-next-line no-console
  console.log(`Start seeding users ...`)
  await prisma.user.deleteMany({})
  for (const userData of users) {
    const user = await prisma.user.create({
      data: userData,
    })
    // eslint-disable-next-line no-console
    console.log(`Created user with id: ${user.id}`)
  }
  // eslint-disable-next-line no-console
  console.log('Seeding users has been finished')
}

async function main(): Promise<void> {
  await seedUsers()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
