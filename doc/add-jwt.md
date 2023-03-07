#### Add env variable

in the `.local.env`

```bash
JWT_SECRET=somehiddensecret
```

#### Install

```bash
pnpm add @nestjs/jwt @nestjs/passport passport passport-jwt
pnpm add -D @types/passport-jwt
```

#### Create strategy

```bash
./auth-strategies/jwt-strategy.ts
```

#### Create a guard

```bash
./guards/jwt-auth-guard.ts
```

#### Import strategy

In `users.module.ts`

```bash
  providers: [..., JwtStrategy],
```

#### Protect methods

```bash
  @UseGuards(JwtAuthGuard)
```

#### Register JWT Auth for swagger

in `main.ts` add

```bash
  const config = new DocumentBuilder()
  // ...
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .build()
```

On the controller assign

```bash
@ApiBearerAuth()
```

#### Add auth module

```bash
./auth
```
