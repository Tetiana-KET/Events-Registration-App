## Events Registration App

## **[Deployment Link]()**

## Tech Stack

- **TypeScript**
- **React** - Main library
- **React Router**
- **React Hook Form**
- **Yup** is used for form validation
- **Vite** is used as bundler
- **Husky** Pre-push/Pre-commit are set
- **Linters**: ESLint, Prettier

## Scripts available

### Start development server

```
npm run dev
```

This command runs `vite` to start the development server. It provides fast, hot module replacement (HMR) for a smooth development experience, allowing you to see changes in real-time as you modify your code.

### Build the project

To build the project run

```
npm run build
```

This command first compiles the TypeScript code using the TypeScript compiler (`tsc -b`). This ensures type checking and generates necessary type declaration files. After successful compilation, it builds the project with Vite (`vite build`), creating an optimized production-ready bundle.

> Note: Running `tsc -b` ensures thorough type checking and may generate additional type files that `vite build` does not.

### ESLint check

To check for code style and potential errors in the `src/` directory, including TypeScript and TSX files (--ext ts,tsx), run

```
npm run lint
```

It also reports any unused disable directives (--report-unused-disable-directives) and sets the maximum number of warnings to 0 (--max-warnings 0), which means ESLint will treat warnings as errors. This script helps quickly identify code style issues and potential errors in the project

### ESLint fix issues

To automatically fixe ESLint errors and code style issues in the `src/` directory run:

```
npm run lint:fix
```

### Check the production build

To check if the production build looks OK in your local environment use:

```
npm run preview
```

It will run scripts `vite build && vite preview` to create `dist` folder (if absent), build the project and boot up a local static web server that serves the files from dist at http://localhost:4173.

_It is important to note that `vite preview` is intended for previewing the build locally and not meant as a production server._

### Prettier check

To check if your files in the `src/` directory are formatted run

```
npm run prettier
```

This will output a human-friendly message and a list of unformatted files, if any.
It will run `prettier --check --ignore-unknown src/`, that is set to ignore unknown file types. Prettier will not attempt to check files with extensions that it does not recognize.

### Prettier fix issues

To fix code formatting issues in the `src/` directory using Prettier run:

```
npm run format:fix
```

The `--ignore-unknown` flag is also used to instruct Prettier not to format files with extensions that it does not recognize.

### ESLint and Prettier fix issues

To make ESLint fix code style issues, and then format code using Prettier in the `src/` directory - use

```
npm run format:all
```

It will run scripts `npm run lint:fix && npm run prettier:fix`

### Set up Git hooks

To automatically set up Git hooks for code linting and formatting, run the following command after installing project dependencies:

```
npm run prepare
```

### TypeScript Type Checking

To perform TypeScript type checking without generating JavaScript files, run the following command:

```
npm run types-check
```

### Total code checking by 1 command

To perform total code checking, ensuring code quality and consistency before pushing changes to the repository or before building and deploying, run the command

```
npm run validate:all
```

### Deploy to gitHub pages

```
npm run deploy
```
