#### Generate migrations

```bash
pnpm nx migrate latest
```

#### Run migrations

```bash
pnpm nx migrate --run-migrations
```

#### Remove migrations file

```bash
rm migrations.json
```

> Related link
> https://nx.dev/core-features/automate-updating-dependencies

***

Problems from previous updates

In `project.json` replace

```bash
      "executor": "@nrwl/workspace:run-commands",
```

And

```bash
@nx/workspace:run-commands
```

with

```bash
      "executor": "nx:run-commands",
```

Re-install nx-stylelint

```bash
pnpm remove nx-stylelint
pnpm add -D nx-stylelint
```