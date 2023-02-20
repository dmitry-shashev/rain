#### Install

```bash
pnpm add prisma @prisma/client
```

> `@prisma/client` is required for new client generation,
> so even we are not using it, we have to install

```bash
pnpm nx g @nrwl/js:library --name=data-access-db --compiler swc --unitTestRunner jest --buildable --tags "libs:data-access-db"
```

Add to the git ignore

```bash
# auto-generated prisma client
/libs/data-access-db/src/lib/auto-generated-client
```

#### Create `prisma.scheme`

In the library above


#### Add a path in order to format the file

in `package.json`

```bash
  "prisma": {
    "schema": "libs/data-access-db/src/lib/schema.prisma"
  }
```

Also add a `postinstall` section

```bash
    "postinstall": "pnpm prisma-generate",
```

In schema it is important to specify the path

```bash
generator client {
  provider = "prisma-client-js"
  output   = "./auto-generated-client"
}
```

Because otherwise it will create generated client in the `node_modules`
and if the folder is excluded - it won't work

And then we can run simply

```bash
prisma format
```

or

```bash
pnpm prisma format
```

And it will format the schema file

#### Add to the pre-commit hook

```bash
pnpx husky add .husky/pre-commit "pnpm prisma format"
pnpx husky add .husky/pre-push "pnpm prisma validate"
```

> pay attention - in pre commit hook the last one should be

```bash
git add --all
```

#### Build schema online

```bash
https://www.prismabuilder.io/
```

#### Connections string

Mysql

```bash
mysql://USER:PASSWORD@HOST:PORT/DATABASE
# mysql://root@127.0.0.1:3306/rain_db
```

Sqlite

```bash
file:./db.sql
```

#### Commands

```bash
pnpm prisma init
pnpm prisma generate
pnpm prisma studio
pnpm prisma migrate dev
pnpm prisma db pull
pnpm prisma db push
pnpm prisma validate
pnpm prisma format
```

#### Add to the `main.ts` in NestJS

```bash
...
  // init prisma
  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)
  // -
...
```

#### Add to `package.json`

```bash
    "prisma-generate": "env-cmd -f .local.env prisma generate",
    "prisma-migrate": "env-cmd -f .local.env prisma migrate dev",
    "prisma-pull": "env-cmd -f .local.env prisma db pull",
    "prisma-push": "env-cmd -f .local.env prisma db push",
    "prisma-seed": "env-cmd -f .local.env prisma db seed",
    "prisma-studio": "env-cmd -f .local.env prisma studio"
```

> `env-cmd` allows to start commands with specific '.env' variables

#### Add seeds

Create seeds file

> Pay attention - remove existing data using - `deleteMany`

Then add the path in the `package.json` - it provides auto start on migration

```bash
  "prisma": {
    ...
    "seed": "ts-node libs/data-access-db/src/lib/seed.ts"
  }
```

#### Enable cors

In `main.ts` add

```bash
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })
```
