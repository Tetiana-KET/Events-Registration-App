## Events Registration App

## The middle level is completed

## **[Deployment Link]()**

## Requirements

- [x] Add the level of accomplished tasks in the README.md file.
- [x] Upload source code to GitHub/BitBucket/GitLab and share a link.
- [x] Host an application in any preferable way and share the URL to access it.
- [x] The front-end part must be done in HTML/CSS/JavaScript (with or without any
      framework), with any preferred design style.
- [x] The back-end part can be done in NodeJS with or without any framework.
- [x] Use any relational or non-relational database.

- [x] **Base level**

- [x] implement the events board page where users can observe the paginated list of available events. Event should consist of:
- title;
- description;
- event date;
- organizer
- [x] Event registration page: by clicking on “Register”, users should be redirected to the
      event registration page, which contains a registration form with the following fields:
- full name
- email
- date of birth
- “where did you hear about this event?”.
- [x] Once the form is submitted, the response should be stored in a database.
- [x] implement the event participants page where users can see a list of registered participants. This page should be available by clicking on the “View” button.

- [x] **Middle level**
- [x] Everything from the base level
- [x] Events board page: add ability to sort events by: title, event date, organizer.
- [x] Event registration page:add form validation (come up with your own requirements for fields’ validity);
- [x] add DataPicker to Date of birth input;
- [x] Event participants page: add ability to search participants by full name, email.

- [ ] **Advanced level**
- [ ] Everything from the middle level
- [ ] Events board page: add infinite scroll pagination (when a user scrolls the page, it
      automatically loads more events).
- [ ] Event participants page: add line/bar chart displaying the amount of registrations per
      day for the given event.
- [ ] Implement a separate script that runs at a defined interval of time: it fetches the list of
      available events from a third-party API and stores them as events in your database.
      You can search for any free API available on the internet

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

### Start the server

```
npm start
```

This command executes the TypeScript server file (server.ts) using ts-node. It allows you to run your TypeScript server without the need to compile it to JavaScript manually.

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
