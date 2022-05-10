# MRR Drones Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br />

## Deployment

System status:
[![CI](https://github.com/MRR-Drones/dashboard-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/MRR-Drones/dashboard-frontend/actions/workflows/ci.yml)
[![Deploy](https://github.com/MRR-Drones/dashboard-frontend/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/MRR-Drones/dashboard-frontend/actions/workflows/deploy.yml)

<br />

## Getting Started

1. Install [NodeJS](https://nodejs.org/en) on your system
2. Clone this repository
3. Set up your `.env` and `.npmrc`
4. Run:

```
npm install
npm run prepare
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />

## Directory structure

### public

This directory holds the `index.html` file as well as some app icons, favicon and the app's manifest. You probably never have to edit these files.\
Only edit the `index.html` file to load external stylesheets.

### src

This directory holds the `index.jsx` file which initializes all top-level components and renders them to the `index.html` file when building.\
`setupTests.js` is [used by GitHub](https://github.com/sieuwe1/dahsboard-frontend/actions/workflows/testing.yml) to run tests after a pull request/push to the `development`, `acceptance`, or `master` branches.

### src/assets

This directory holds all fonts and images used by the Dashboard.

### src/components

All reusable components are stored in this directory. Each component has its own subfolder containing a `.jsx` file for the component itself, and a `.scss` file for styling rules specific to this component.

### src/core

All `.jsx` files in this directory form the logic needed for the Dashboard to work properly. Page routing and API requests are initialized in here.

### src/pages

This directory holds all pages or views of the Dashboard. The shared stylesheet contains all basic styling that is equal to all views.

### src/styles

Global styling rules are located in this directory. Style variables and the definition of the font are also listed in here.

<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

[![CI](https://github.com/MRR-Drones/dashboard-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/MRR-Drones/dashboard-frontend/actions/workflows/ci.yml)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Drone Dashboard is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<br />

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/) or follow [this Udemy course](https://udemy.com/course/react-redux).
