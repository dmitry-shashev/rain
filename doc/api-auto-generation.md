#### Install

```bash
pnpm add @rtk-query/codegen-openapi
```

#### Create a config file

`./libs/store/src/lib/api/auto-generated/openapi-config-v1.ts`

#### Create a basic api for future injection

`./libs/store/src/lib/api/auto-generated/auto-generated-base.api.ts`

Also connect it in the `store.ts`

#### Add to `package.json`

```bash
"generate-dto-v1": "rtk-query-codegen-openapi ./libs/store/src/lib/api/auto-generated/openapi-config-v1.ts && eslint --fix ./libs/store/src/lib/api/auto-generated/auto-generated.api.ts && prettier --write ./libs/store/src/lib/api/auto-generated/auto-generated.api.ts"
```

#### Re-export all auto-generated

In `./libs/store/src/index.ts`

```bash
export * from './lib/api/auto-generated/auto-generated.api'
```

#### Add eslint rules

`.eslintrc.json`

```bash
    "@typescript-eslint/ban-types": ["error", {
      "types": {
        "{}": false
      }
    }],
    "no-inline-comments": [
      "error",
      {
        "ignorePattern": " status "
      }
    ],
```