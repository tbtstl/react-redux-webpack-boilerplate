# React Redux Webpack Boilerplate

This boilerplate is a starting point for a web app with redux, react, react-router, and webpack.

### Requirements
This repository was built using npm v4.2.0

### Quickstart
1. Clone this repo and give your project a name: `git clone https://github.com/tysonbattistella/react-redux-webpack-boilerplate.git <YOUR_PROJECT_NAME>`
2. Enter the directory: `cd <YOUR_PROJECT_NAME>`
3. Install the requirements: `npm install`
4. Build the project
    1. To build for development, run `npm run dev`
        1. Press `ctrl+H` to open the Redux Devtool side bar.
    2. For a production app, run `npm run build`
5. Click on the unicorn 🦄

### Project Structure
This boilerplate's structure is based off of the [Ducks Pattern](https://github.com/erikras/ducks-modular-redux).
It allows for redux features to be bundled together in a self-contained matter.
Components are split into Presentational and Container Components (`app/components/` and `app/containers/`, respectfully) as recommended in [this write-up by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).
CSS files are siblings to their components, as each component is nested in its own directory and exposed through the `components/index.js` file.
