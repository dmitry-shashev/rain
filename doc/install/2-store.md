#### Install

```bash
pnpm add react-redux
pnpm add @reduxjs/toolkit
```

#### Add a library

```bash
pnpm nx g @nrwl/js:library --name=store
```

#### Wrap `main.ts`

```bash
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
```
