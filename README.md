# React Web Component

**Disclaimer: I don't recommend to use this code for production widgets, this is was made for testing purpose**

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The purpose of this repository is to have a simple boilerplate to create [web-components](https://www.webcomponents.org/) using React.

At the moment we cover some basics needs:

- Full encapsulated CSS via the shadow-dom
- [Build a single bundle](#yarn-buildbundle) in order of make the distribution easier.
- Use [react-shadow-dom-retarget-events package](https://www.npmjs.com/package/react-shadow-dom-retarget-events) to be able of use React events.
- Typescript 🚀

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:bundle`

Same as `yarn build` but it generates an unique bundle file (`build/static/js/bundle.js`) in order to make the distribution of the web component more easy.