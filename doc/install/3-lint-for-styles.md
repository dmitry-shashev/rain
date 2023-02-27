#### Install packages

```bash
pnpm add -D nx-stylelint
```

#### Init for projects

```bash
pnpm nx g nx-stylelint:configuration --project components
pnpm nx g nx-stylelint:configuration --project dashboard
```

Add `scss` in each `project.json`

```bash
    "lintFilePatterns": ["libs/components/**/*.{css,scss}"]
```

And `.stylelintrc`

```bash
      "files": ["**/*.css", "**/*.scss"],
```

#### Add `customSyntax`

```bash
pnpm add -D postcss-scss
```

Add in `.stylelintrc.json`

```bash
{
  ...
  "overrides": [
    {
      ...
      "customSyntax": "postcss-scss",
    }
  ],
}
```

#### Add to the pre-commit hook

Add to `package.json`

```bash
    "lint-styles": "nx run-many --target=stylelint",
```

And then add to husky

```bash
pnpx husky add .husky/pre-push "pnpm lint-styles"
```

#### Add prettier - auto formatting

```bash
pnpm add -D stylelint-prettier
pnpm add -D stylelint-config-prettier
```

Add in `.stylelintrc.json`

```bash
"plugins": ["stylelint-prettier"],
...

  "rules": {
    "prettier/prettier": true
  }
```

#### Turn it on in the `web storm` - searching `stylelint`

In webstorm in `prettier` as extensions add `scss` and `css`

#### Then we can run it

```bash
pnpm nx run-many --target=stylelint
```

