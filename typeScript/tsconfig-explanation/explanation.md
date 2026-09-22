# TSCONFIG

- controls how TS compiles and checks your code.

- A useful way to think about it is:
  - What files should TypeScript consider?
    -How should TypeScript compile them?
  - What JavaScript should it generate?
  - How strict should type checking be?
  - How should modules/imports work?
  - How should paths resolve?
  - What should TypeScript exclude?

## Example file:

```
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],

    "module": "ESNext",
    "moduleResolution": "Bundler",

    "jsx": "preserve",

    "strict": true,
    "noEmit": true,

    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,

    "resolveJsonModule": true,
    "isolatedModules": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },

  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],

  "exclude": [
    "node_modules"
  ]
}
```

### Compilor Options - For next.js developer this is core

- target: Controls what JS version TS outputs - ES2020+ is common as of date 09/21/2026 - common values are: ES5, ES2015, ES2017, ES2020, ES2022, ESNext

- lib: specifies which JS/browser APIs TS knows about. DOM gives TypeScript knowledge of document, window, localstorage, fetch, HTMLElement etc.

- Module: controls module system. You can do `import React from 'react'` because of this statement. Common modules are commonJS, esnext

- moduleResolution: controls how TS finds imported modules

- jsx: Controls how TypeScript handles JSX. Common options are: preserve (keep JSX intact, another tool handles it), react (classic React.CreateElement transform), react-jsx (modern automatic JSX transformation where you don't evenneed to write import statement like `import React from 'react'`), etc.

- strictness: This enables a collection of stricter type-checking rules. You can control individual strict rules as

```
{
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true
}
```

or simply do:
`"strict": true`
to manually enable all of them.

- noEmit: mostly this is set as true. It means TypeScript should type-check my code, but don't generate .js files. The actual build or transformation can be handled by Next.js/Vite/Webpack, esbuild, etc.

- Module interoperability: Helps TS to work smoothly with other modules.

- resolveJSONModule:

- isolatedModules: Set as true tp make sure every file is safely transformed independently

- Path aliases: We add paths here so that we can write less verbose import statements in code

- include: Controls which files TypeScript should process.
- exclude: Controls which files/directories TypeScript should ignore.

- types: Controls which type packages are automatically included. Ex. if you write ` "types": ["jest]`, then this gives you jest globals and types. Without it, you can't use process, describe, or expect statement.

- sourceMap

- declaration: if set as true, it describes the types exposed by your library. Particularly used when you are building an npm package. Files usually go by \*.d.ts

- outDir: Controls where generated JS goes. Ex. ./dist folder

- rootDir: Defines the root of your TypeScript source

- project references: Used for large monorepos. Typically written as:

```
"references" : [
    {"path": "./packages/ui"}
    {"path": "./packages/api"}
]
```

This allows multiple TypeScript projects to depend on one another efficiently. This is used in Turborepo, monorepos and design system packages

## Remember:

tsconfig.json is primarily TypeScript's compiler/type-checking configuration; it does not, by itself, define how your entire Next.js application is bundled or deployed. The framework's build tooling also has a major role.
