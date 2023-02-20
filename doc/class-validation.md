#### Install packages

```bash
pnpm add class-validator class-transformer
```

#### Add to `main.ts`

```bash
app.useGlobalPipes(new ValidationPipe());
```

#### Add to properties

```bash
@IsEmail()
@IsNotEmpty()
@IsNumberString()
```
