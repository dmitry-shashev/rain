#### Install

```bash
pnpm add cookie-parser
pnpm add -D @types/cookie-parser
```

#### Init

```bash
import cookieParser from 'cookie-parser'

app.use(cookieParser());
```

#### In controller

```bash
import { Response } from 'express'


@Res({ passthrough: true }) response: Response
    
response.cookie('Authorization', token, {
  httpOnly: true,
  maxAge: 1000 * 60 * 60,
})
```