#### Base installation

```bash
pnpx create-nx-workspace@latest mono-graph --preset=apps
```

Replace `.npmrc`, `.prettierignore`

Remove `.prettierrc` and add into `package.json`

```bash
  "prettier": {
    "arrowParens": "always",
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true,
    "bracketSpacing": true
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  },
  "engines": {
    "node": ">=20.9.0",
    "pnpm": "8.10.2"
  },
  "packageManager": "pnpm@8.10.2"
```

#### Add react application

```bash
pnpm add -D @nx/react
pnpm nx g @nx/react:application dashboard --routing --compiler swc
```

And then select `scss` and `vite`

#### Add nest application

```bash
pnpm add -D @nx/nest
pnpm nx g @nx/nest:app back
```

#### Add to `tsconfig.base.json`

```bash
"useUnknownInCatchVariables": false,
"strictNullChecks": true,
"noUncheckedIndexedAccess": true,
"noImplicitAny": true,
"noImplicitReturns": true,
```

#### Extend lint rules - `.eslintrc.json`

For typescript override next sections

```bash
   "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.base.json"
      },
      "rules": { ...
```

#### Add `tsc` to all projects

> Also add `tsc` as `cacheableOperations` into `nx.json`

In `package.json`

```bash
    "tsc": "nx run-many --target=tsc",
```

And then for each project - `project.json`

> Dummy example

```bash
    "tsc": {
      "executor": "nx:run-commands",
      "options": {
        "commands": [
          {
            "command": "tsc --noEmit -p libs/store/tsconfig.lib.json"
          }
        ]
      }
    }
```

#### Add a regular library

```bash
pnpm nx g @nrwl/js:library --name=core
```

#### Add a dto library

```bash
pnpm nx g @nrwl/js:library --name=dto
```

#### Add components library

```bash
pnpm nx g @nx/react:library components --compiler swc --bundler vite --unitTestRunner jest --buildable
```

#### Add css reset

```bash
pnpm add normalize.css
```

#### Start commands with env

```bash
pnpm add env-cmd
```

#### Add moment

```bash
pnpm add moment
```

#### Add models libraries

> As back models we are using data-access models

```bash
pnpm nx g @nrwl/js:library --name=models-ui
```

#### Forms

```bash
pnpm add react-hook-form
```

#### For password hashing

```bash
pnpm add bcrypt
pnpm add -D @types/bcrypt
```

#### Add express

```bash
pnpm add express
pnpm add -D @types/express
```
