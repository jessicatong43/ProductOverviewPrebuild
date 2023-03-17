# ProductOverviewPrebuild
Feature testing area for the product overview component

Ensure nodeJS and npm are installed
Add folders for client/dist and client/src

npm init // to create package.json

npm install // build out webpack
  webpack webpack-cli webpack-dev-server html-webpack-plugin html-webpack-root-element-plugin --save-dev
  babel babel-cli babel-loader @babel/preset-env @babel/preset-react --save-dev
  eslint eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-import-resolver-typescript --save-dev
  husky --save-dev
  jest @testing-library/react babel-jest react-test-renderer --save-dev
  tailwindcss --save-dev
  dotenv
  react react-dom react-redux redux @reduxjs/toolkit @redux-devtools/core

npx install-peerdeps --dev eslint-config-airbnb // to configure eslint for Airbnb styling

Add the following scripts to package.json
  "scripts": {
    "test": "jest",
    "prepare": "husky install",
    "dev": "webpack --mode development --config webpack.config.js",
    "build": "webpack --mode production --config webpack.config.js",
  },

Create webpack.config.js, .env, .eslintrc.json, jsconfig.json (see files)
(.gitignore should've been created already, but if not prompted to, create the .gitignore)

Add aliases to the webpack as needed. For example, you can import from index.js in the components folder by using:
"import Components from 'Components' if you have the aliases defined below.
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '/client/src/components/'),
    },
  },