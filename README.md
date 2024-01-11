<h1 align="center">
  <⚡⚛️> 🔥 Software Developer Portfolio Template
</h1>

<p align="center">
  Software Developer Portfolio Template in React with TypeScript following best practices: Unit and end-to-end tests, Continuous Integration, and linting.
	This is a complete customizable template which lets you showcase your work, education and experience about you as Software Developer.
  <br />
  <br />
  <a href="https://github.com/serodas/my-portfolio-react-typescript">Stars are welcome 😊</a>
</p>

# Preview
![Preview](/src/assets/images/portfolio.gif)

# Sections
- Home
- Education
- Experience
- Projects
- Contact

## ⚡ Using this template

1. Create your project based on this template:
   - a) If you want to create a GitHub repository, we would recommend to use the GitHub "Use this template" button and clone your newly created repository
   - b) If you prefer to just create a local project, you can use [degit](https://github.com/Rich-Harris/degit):
     ```bash
     npx degit repo-url my-app
     ```
2. Update your project meta-information:
   - [ ] Update the `package.json`:
     - [ ] Specify proper values for the `name`, `author` and `license` properties
     - [ ] Remove the `private` property if you plan to publish the app as a npm package
   - [ ] Change the author in `LICENSE`
   - [ ] Change the title in `index.html`
   - [ ] Replace the favicon in the `public` directory

3. Run your app:
   1. `cd my-app`: Move to your project root directory
   2. `npm install`: Install all the project dependencies
   3. `npm start`: Start the development server on [localhost:3000](http://localhost:3000)

## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

1. `npm start`: Start the development server on [localhost:3000](http://localhost:3000)
2. Run end-to-end tests with Cypress choosing one of the following options:
  - `npm run cy:open`: Open Cypress in dev mode
  - `npm run cy:run`: Execute Cypress in CLI

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

# illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

# References
Based on https://github.com/harikanani/harikanani.github.io
Illustrations: https://undraw.co/
